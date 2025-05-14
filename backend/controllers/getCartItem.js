const prisma = require("../shortcut/prisma_initilization");
const decrypt = require("../utils/usefulFunction/decryption");

const getItem = async (req, res) => {
  try {
    const cookies = req.cookies;
    if (!cookies) {
      return res.status(401).json({ Message: "Cookie is missing" });
    }
    const encryptedemail = cookies.emenc;
    if (!encryptedemail) {
      return res
        .status(401)
        .json({ Message: "You are not Logged in, Please check in first" });
    }
    const decryptedemail = decrypt(encryptedemail);
    if (!decryptedemail) {
      return res
        .status(400)
        .json({ Message: "Looks like their is error at decryption function" });
    }
    const usercartData = await prisma.usercart.findUnique({
      where: { email: decryptedemail },
    });
    if (!usercartData) {
      console.log("unable to fetch usercartdata from db");
      return res
        .status(406)
        .json({ Message: "Hey! this is your first time Shopping" });
    }

    console.log("Got usercartdata and now waiting for usercartitem....");

    const itemsIdString =
      usercartData && usercartData.itemsid
        ? usercartData.itemsid
        : "nothing here"; //array in string form
    if (!itemsIdString || itemsIdString === "nothing here") {
      console.log("Your cart is empty");
      return res.status(404).json({ Message: "Looks Like your cart is empty" });
    }
    const itemsIdArrayString = itemsIdString.slice(1, -1).split(",");
    const itemsIdArrayInt = itemsIdArrayString.map((str) =>
      parseInt(str.trim())
    );
    // Filter out NaN values
    const filteredItemsIdArrayInt = itemsIdArrayInt.filter(
      (id) => !Number.isNaN(id)
    );

    const usercartItem = await prisma.products.findMany({
      where: {
        ProductId: {
          in: filteredItemsIdArrayInt,
        },
      },
    });
    if (!usercartItem) {
      console.log("unable to fetch usercartitem from db");
    } else {
      console.log("Got usercartitem, please check the cart");
    }

    return res.status(200).json({ cartitem: usercartItem });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Unable to fetch Item right now" });
  }
};

module.exports = { getItem };
