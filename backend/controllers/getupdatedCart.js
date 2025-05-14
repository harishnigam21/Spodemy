const decrypt = require("../usefulFunction/decryption");
const prisma = require("./prisma_initilization");
const getCart = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies) {
      return res.status(404).json({ Message: "Cookie is Missing" });
    }
    const encryptedemail = cookies.emenc;
    if (!encryptedemail) {
      return res
        .status(401)
        .json({ Message: "You are not logged in, please sign in" });
    }
    const decryptedemail = decrypt(encryptedemail);
    if (!decryptedemail) {
      return res
        .status(400)
        .json({ Message: "Problem at decryption function" });
    }
    try {
      const ExistingCart = await prisma.beforebuying.findMany({
        where: {
          email: decryptedemail,
          transactionid: null,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      });
      if (ExistingCart && ExistingCart.length > 0) {
        return res.status(200).json({ updatedcart: ExistingCart[0].usrcartobj });
      } else {
        return res
          .status(404)
          .json({ Message: "No previous cart, please push new default Cart" });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ Message: `DB side error : ${error.Message}` });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      Message: `Problem while fetching data from the DB and error is ${error.Message}`,
    });
  }
};
module.exports = { getCart };
