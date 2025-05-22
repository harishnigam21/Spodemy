const prisma = require("../shortcut/prisma_initilization");
const decrypt = require("../utils/usefulFunction/decryption");
const getWL = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies) {
    return res.status(401).json({
      Message: "Cookie is missing, You are not authorized to move forward",
    });
  }
  const encryptedEmail = cookies.emenc;
  if (!encryptedEmail) {
    return res.status(400).json({ Message: "Imp cookie is missing" });
  }
  const decryptedEmail = decrypt(encryptedEmail);
  if (!decryptedEmail) {
    return res.status(503).json({ Message: "Problem at decrypted function" });
  }
  try {
    const wishListObj = await prisma.whishlist.findUnique({
      where: { email: decryptedEmail },
    });
    if (!wishListObj || JSON.parse(wishListObj.listObj).length === 0) {
      return res.status(404).json({
        Message:
          "Looks like you have not created list yet or maybe your list is empty",
      });
    }
    console.log("Successfully retrived wishlist");
    return res.status(200).json({
      Message: "Successfully retrived wishlist",
      obj: wishListObj.listObj,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: error });
  }
};
const postWL = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies) {
    return res.status(401).json({
      Message: "Cookie is missing, You are not authorized to move forward",
    });
  }
  const encryptedEmail = cookies.emenc;
  if (!encryptedEmail) {
    return res.status(400).json({ Message: "Imp cookie is missing" });
  }
  const decryptedEmail = decrypt(encryptedEmail);
  if (!decryptedEmail) {
    return res.status(503).json({ Message: "Problem at decrypted function" });
  }
  try {
    if (!req.body.whishlistState) {
      return res.status(406).json({
        Message:
          "This type of request is not allowed, we cannot move forward without source data",
      });
    }
    const isORnot = await prisma.whishlist.findUnique({
      where: { email: decryptedEmail },
    });
    if (isORnot) {
      const update = await prisma.whishlist.update({
        where: { email: decryptedEmail },
        data: { listObj: JSON.stringify(req.body.whishlistState) },
      });
      if (!update) {
        console.log("Unable to update data at DB");
        return res.status(503).json({ Message: "Unable to update data at DB" });
      }
      console.log("Successfully updated data at DB");
      return res
        .status(200)
        .json({ Message: "Successfully updated data at DB" });
    } else {
      const create = await prisma.whishlist.create({
        data: {
          email: decryptedEmail,
          listObj: JSON.stringify(req.body.whishlistState),
        },
      });
      if (!create) {
        console.log("Unable to create data at DB");
        return res.status(503).json({ Message: "Unable to create data at DB" });
      }
      console.log("Successfully created data at DB");
      return res
        .status(200)
        .json({ Message: "Successfully created data at DB" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ Message: error });
  }
};
module.exports = { getWL, postWL };
