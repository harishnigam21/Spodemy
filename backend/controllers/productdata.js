const prisma = require("../shortcut/prisma_initilization");
const decrypt = require("../utils/usefulFunction/decryption");
const verifyUser = require("../utils/usefulFunction/verifyUser");
const returnDate = require("../utils/usefulFunction/returnDate");
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
    if (!validProducts || validProducts.length === 0) {
      return res
        .status(404)
        .json({ Message: "looks like, your stock is empty" });
    }
    return res.status(200).json({ product: validProducts });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};

const postProduct = async (req, res) => {
  try {
    if (
      req.body.shopname &&
      req.body.email &&
      req.body.pname &&
      req.body.pbrand &&
      req.body.pquantity &&
      req.body.pprice &&
      req.body.uploadUrls
    ) {
      const email = verifyUser(req, res);
      if (!email || email === undefined) {
        return res
          .status(500)
          .json({ Message: `response from verify user ${email}` });
      }
      const newProduct = {
        ProductName: req.body.pname,
        ProductBrand: req.body.pbrand,
        ProductQuantity: parseInt(req.body.pquantity),
        ProductPrice: parseInt(req.body.pprice),
        ProductExpirydate: returnDate(),
        ProductImg: JSON.stringify(req.body.uploadUrls),
        ShopName: req.body.shopname,
        UserEmail: req.body.email,
      };
      const postProduct = await prisma.products.create({
        data: newProduct,
      });
      if (!postProduct) {
        console.log("Unable to create new product");
        return res
          .status(503)
          .json({ Message: "Unable to create new product" });
      }
      console.log("Successfully created product");
      return res.status(200).json({ Message: "Successfully created product" });
    } else {
      return res.status(404).json({ Message: "Missing info at body" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: error });
  }
};
module.exports = { getProduct, postProduct };
