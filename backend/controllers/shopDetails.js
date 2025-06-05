const prisma = require("../shortcut/prisma_initilization");
const decrypt = require("../utils/usefulFunction/decryption");
const verifyUser = require("../utils/usefulFunction/verifyUser");
const postshopDetails = async (req, res) => {
  if (
    req.body.email &&
    req.body.shopname &&
    req.body.shopaddress &&
    req.body.uploadUrls
  ) {
    try {
      const cookies = req.cookies;
      if (!cookies) {
        return res.status(401).json({ Message: "You are not authorized" });
      }
      const encryptedEmail = cookies.emenc;
      if (!encryptedEmail) {
        return res.status(403).json({
          Message:
            "Important cookie is missing, such type of access is not allowed",
        });
      }
      if (req.body.email !== decrypt(encryptedEmail)) {
        return res
          .status(405)
          .json({ Message: "Hey! don't try to hardcode url" });
      }
      const newShop = {
        email: req.body.email,
        shopName: req.body.shopname,
        shopAddress: req.body.shopaddress,
        shopImg: JSON.stringify(req.body.uploadUrls),
      };
      const createShop = await prisma.shopdetails.create({
        data: newShop,
      });
      if (!createShop) {
        console.log("Problem while creating store at DB");
        return res
          .status(500)
          .json({ Message: "Problem while creating store at DB" });
      }
      console.log("Successfully registered store");
      return res.status(200).json({ Message: "Successfully registered store" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: error });
    }
  } else {
    return res.status(404).json({ Message: "Missing mandatory field's" });
  }
};
const getshopDetails = async (req, res) => {
  const cookies = req.cookies;
  const email = await verifyUser(req,res,cookies);
  if (email) {
    const shopDetail = await prisma.shopdetails.findUnique({
      where: { email: email },
    });
    if (!shopDetail) {
      return res.status(404).json({
        Message:
          "Looks like you have not registered your shop yet, taking you there in 5s",
      });
    }
    console.log("got store details");
    return res.status(200).json({ Message: "got store details" });
  } else {
    return email;
  }
};
module.exports = { postshopDetails, getshopDetails };
