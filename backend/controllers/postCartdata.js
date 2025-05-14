const prisma = require("../shortcut/prisma_initilization");
const decrypt = require("../utils/usefulFunction/decryption");

const postData = async (req, res) => {
  if (req.body.iteminatc && req.body.itemidsinatc) {
    try {
      const cookies = req.cookies;
      const encryptedEmail = cookies.emenc;
      const decryptEmail = decrypt(encryptedEmail);
      if (!encryptedEmail) {
        return res.status(404).json({ Message: "Missing Cookies" });
      }
      if (!decryptEmail) {
        return res.status(404).json({ Message: "Problem while decrypting" });
      }
      const EmailExists = await prisma.usercart.findUnique({
        where: {
          email: decryptEmail,
        },
      });
      if (EmailExists) {
        try {
          const datatocart = await prisma.usercart.update({
            where: { email: decryptEmail },
            data: {
              totalItem: req.body.iteminatc,
              itemsid: JSON.stringify(req.body.itemidsinatc),
            },
          });
          if (datatocart) {
            console.log('Successfully updated cart');
            return res
              .status(200)
              .json({ Message: "Successfully updated cart" });
          } else {
            console.log("Problem while updating data at DB side");
          }
        } catch (error) {
          console.log(
            `Problem while updating cart table at backend side and this is error : ${error}`
          );
          return res.status(500).json({
            Message:
              "Problem while updating cart table at backend side",
          });
        }
      } else {
        try {
          const datatocart = await prisma.usercart.create({
            data: {
              email: decryptEmail,
              totalItem: req.body.iteminatc,
              itemsid: JSON.stringify(req.body.itemidsinatc),
            },
          });
          if (datatocart) {
            console.log('Successfully created cart');
            return res
              .status(200)
              .json({ Message: "Successfully created cart" });
          } else {
            console.log("Problem while creating data at DB side");
          }
        } catch (error) {
          console.log(
            `Problem while creating cart table at backend side and this is error : ${error}`
          );
          return res.status(500).json({
            Message:
              "Problem while creating cart table at backend side",
          });
        }
      }
    } catch (error) {
      console.log(
        `Problem while requesting data and this is the error : ${error}`
      );
      return res.status(500).json({
        Message:
          "Problem while requesting data",
      });
    }
  } else {
    console.log("Missing iteminatc and itemidsinatc");
  }
};

module.exports = { postData };
