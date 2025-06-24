const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { v4: uuidv4 } = require("uuid");
const prisma = require("../shortcut/prisma_initilization");
const decrypt = require("../utils/usefulFunction/decryption");
const checkout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies) {
    return res.status(401).json({ Message: "Please login to move forward" });
  }
  const encryptedEmail = cookies.emenc;
  if (!encryptedEmail) {
    return res.status(404).json({ Message: "Important cookie is Missing" });
  }
  const decryptedEmail = decrypt(encryptedEmail);
  if (!decryptedEmail) {
    return res.status(503).json({ Message: "Problem while decrypting" });
  }
  const { quantities } = req.body;
  if (!quantities) {
    return res.status(404).json({
      Message: "We didn't get item in your cart, maybe your cart is empty",
    });
  }
  const showItem = quantities.map((item) => ({
    price_data: {
      currency: "INR",
      product_data: {
        name: item.name,
        images: [JSON.parse(item.img)[JSON.parse(item.img).length - 1]],
        description: `Buying from ${item.seller}`,
      },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity,
  }));
  try {
    const transactionID = uuidv4();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: showItem,
      mode: "payment",
      success_url: `https://spodemyfront.vercel.app/main/user/${encryptedEmail}/shop/yourcart/${transactionID}/paymentSuccess`,
      cancel_url: `https://spodemyfront.vercel.app/main/user/${encryptedEmail}/shop/yourcart/${transactionID}/paymentFail`,
    });
    if (!session) {
      return res.status(500).json({ Message: "Unable to create Session" });
    }

    const verifyUser = await prisma.beforebuying.findMany({
      where: { email: decryptedEmail, transactionid: null },
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
    });
    if (!verifyUser) {
      return res
        .status(400)
        .json({ Message: "Don't try to access this page Directly" });
    }
    const sendTransactionID = await prisma.beforebuying.update({
      where: { email: decryptedEmail, id: verifyUser[0].id },
      data: { transactionid: transactionID },
    });
    if (!sendTransactionID) {
      return res.status(500).json({ Message: "Unable to add transaction ID" });
    }
    console.log("Successfully added transaction ID");
    console.log("Successfully created session");
    return res.status(200).json({ id: session.id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: error });
  }
  //added image in qunaity obj
};
module.exports = { checkout };
