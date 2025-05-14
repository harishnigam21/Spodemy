const prisma = require("./prisma_initilization");
const decrypt = require("../usefulFunction/decryption");

const getProduct = async (req, res) => {
  try {
    const cookies = req.cookies;
    const encryptedEmail = cookies.emenc;
    let currentuserEmail = "waiting for decrypt";
    try {
      if (encryptedEmail) {
        currentuserEmail = decrypt(`${encryptedEmail}`);
      }
    } catch (error) {
      console.log(error);
      return res.status(404).json({ Message: "Cookie is missing" });
    }
    if (!currentuserEmail)
      return res.status(404).json({ Message: "Please Sign in First" });
    const validProducts = await prisma.products.findMany({
      where: {
        UserEmail: currentuserEmail,
      },
    });

    if (!validProducts) {
      return res
        .status(401)
        .json({ Message: "Its looks like your stock is empty" });
    }
    return res.status(200).json({ product: validProducts });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
module.exports = { getProduct };
