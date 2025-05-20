const prisma = require("../shortcut/prisma_initilization");
const decrypt = require("../utils/usefulFunction/decryption");
const orderItem = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies) {
    return res.status(401).json({ Message: "Cookie is missing" });
  }
  const encryptedemail = cookies.emenc;
  if (!encryptedemail && req.body.emailenc !== encryptedemail) {
    return res.status(401).json({
      Message: "You are not authorized Directly here, please Login first",
    });
  }

  const decryptedemail = decrypt(encryptedemail);
  if (!decryptedemail) {
    return res
      .status(400)
      .json({ Message: "Looks like their is error at decryption function" });
  }
  try {
    const verifyUser = await prisma.users.findUnique({
      where: { email: decryptedemail },
    });
    if (!verifyUser) {
      return res.status(401).json({
        Message: "You are not authorized Directly here, please Login first",
      });
    }
    const getOrder = await prisma.beforebuying.findMany({
      where: {
        email: decryptedemail,
        transactionid: { not: null },
        transactionstatus: { not: null },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!getOrder || getOrder.length <= 0) {
      return res.status(404).json({
        Message: "Nopes! You didn't make any order yet",
      });
    }
    console.log("Successfully got order items");
    return res
      .status(200)
      .json({ Message: "Successfully got order items", orderItems: getOrder });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: error.Message });
  }
};
module.exports = { orderItem };
