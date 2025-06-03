const prisma = require("../shortcut/prisma_initilization");
const decrypt = require("../utils/usefulFunction/decryption");
const date = require("../utils/usefulFunction/returnDate");
const updateCart = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies) {
      return res.status(401).json({ Message: "Cookie is missing" });
    }
    const encryptedemail = cookies.emenc;
    if (!encryptedemail) {
      return res
        .status(401)
        .json({ Message: "Please Sign in to move forward" });
    }
    const decryptedemail = decrypt(encryptedemail);
    if (!decryptedemail) {
      return res
        .status(401)
        .json({ Message: "Problem at decryption function" });
    }
    if (!req.body.quantities) {
      return res
        .status(404)
        .json({ Message: "Unable to find updated cart object" });
    }
    try {
      const ExistingUserCart = await prisma.beforebuying.findMany({
        where: {
          email: decryptedemail,
          transactionid: null,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      });
      if (ExistingUserCart && ExistingUserCart.length > 0) {
        const updateCart = await prisma.beforebuying.update({
          where: {
            id: JSON.parse(ExistingUserCart[0].id),
          },
          data: {
            usrcartobj: JSON.stringify(req.body.quantities),
            createdAt: date(),
          },
        });
        if (updateCart) {
          console.log("Successfully Updated user buying items");
          return res
            .status(200)
            .json({ Message: "Successfully Updated user buying items" });
        } else {
          console.log(
            "There is some issue at DB side while Updating user buying items"
          );
          return res.status(502).json({
            Message:
              "There is some issue at DB side while Updating user buying items",
          });
        }
      } else {
        const createCart = await prisma.beforebuying.create({
          data: {
            email: decryptedemail,
            usrcartobj: JSON.stringify(req.body.quantities),
            createdAt: date(),
          },
        });
        if (createCart) {
          console.log("Successfully created user buying items");
          return res
            .status(200)
            .json({ Message: "Successfully Created user buying items" });
        } else {
          console.log(
            "There is some issue at DB side while Creating user buying items"
          );
          return res.status(502).json({
            Message:
              "There is some issue at DB side while Creating user buying items",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: error.Message });
  }
};
module.exports = { updateCart };
