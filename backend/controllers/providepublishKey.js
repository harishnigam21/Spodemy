const prisma = require("../shortcut/prisma_initilization");
const decrypt = require("../utils/usefulFunction/decryption");
require("dotenv").config();
const KEY = process.env.STRIPE_PUBLISHABLE_KEY;
const provideKey = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies) {
    return res.status(401).json({ Message: "Please Sign in First" });
  }
  const encryptedEmail = cookies.emenc;
  if (!encryptedEmail) {
    return res
      .status(404)
      .json({ Message: "You are not authorized with this account" });
  }
  const decryptedEmail = decrypt(encryptedEmail);
  if (!decryptedEmail) {
    return res.status(503).json({ Message: "Issue with Decryption Function" });
  }
  const verifyUser = await prisma.beforebuying.findMany({
    where: { email: decryptedEmail, transactionid: null },
    orderBy:{
      createdAt:"desc",
    },
    take:1,
  });
  if (!verifyUser) {
    return res.status(404).json({ Message: "Hey! you are not welcomed here" });
  }
  console.log("Key has been sended Successfully");
  return res.status(200).json({ pk: KEY });
};
module.exports = { provideKey };
