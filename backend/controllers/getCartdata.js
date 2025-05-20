const prisma = require("../shortcut/prisma_initilization");
const decrypt = require("../utils/usefulFunction/decryption");
const getCartdata = async (req, res) => {
  try {
    const cookies = req.cookies;
    const encryptedEmail = cookies.emenc;
    const decryptEmail = decrypt(encryptedEmail);
    if (!cookies?.emenc)
      return res.status(404).json({ Message: "Cookie is Missing" });
    if (!decryptEmail)
      return res
        .status(404)
        .json({ Message: "Problem at decryption function" });
    const validCartdata = await prisma.usercart.findUnique({
      where: {
        email: {
          not: null,
        },
        email: decryptEmail,
      },
    });

    if (!validCartdata) {
      console.log("Looks like your cart is empty");
      return res.status(404).json({ Message: "Looks like your cart is empty" });
    }

    console.log("Successfully got previous cart data");
    return res.status(200).json({ cartdata: validCartdata });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
module.exports = { getCartdata };
