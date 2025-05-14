const prisma = require("../shortcut/prisma_initilization");
const decrypt = require("../utils/usefulFunction/decryption");
const verify = async (req, res) => {
  const { transactionid, transactionState } = req.body;
  if (!transactionid && !transactionState) {
    return res.status(403).json({
      Message:
        "We cannot proceed furthur, because we not received what we want",
    });
  }
  const cookies = req.cookies;
  if (!cookies.jwt) {
    return res
      .status(401)
      .json({ Message: "You are not authorized person, please login.." });
  }
  const encryptedEmail = cookies.emenc;
  if (!encryptedEmail) {
    return res
      .status(401)
      .json({ Message: "Important cookie is missing, cannot move forward" });
  }
  const decryptedEmail = decrypt(encryptedEmail);
  if (!decryptedEmail) {
    return res.status(503).json({ Message: "Problem at decryption func" });
  }
  try {
    const validUser = await prisma.beforebuying.findMany({
      where: { email: decryptedEmail, transactionid: { not: null } },
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
    });
    if (!validUser) {
      return res
        .status(404)
        .json({ Message: "You haven't make any order yet" });
    }
    if (validUser[0].transactionid === transactionid) {
      const updateStatus = await prisma.beforebuying.update({
        where: { email: decryptedEmail, id: validUser[0].id },
        data: { transactionstatus: transactionState },
      });
      if (!updateStatus) {
        return res
          .status(500)
          .json({ Message: "Unable to update data to DB side" });
      }
      console.log("Successfully Updated paymentState to DB");
      if (transactionState === "SUCCESS") {
        const resetUserCart = await prisma.usercart.update({
          where: { email: decryptedEmail },
          data: {
            totalItem: 0,
            itemsid: "",
          },
        });
        if (!resetUserCart) {
          console.log("Problem while resetting User Cart");
        }
        console.log("Successfully resetted User Cart");
      }
      return res
        .status(200)
        .json({ Message: "Successfully Updated paymentState to DB" });
    } else {
      return res
        .status(406)
        .json({ Message: "Don't try to access this page directly" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: error.Message });
  }
};
module.exports = { verify };
