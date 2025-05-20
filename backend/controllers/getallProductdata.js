const prisma = require("../shortcut/prisma_initilization");

const getProduct = async (req, res) => {
  try {
    const validProducts = await prisma.products.findMany();
    if (!validProducts) {
      return res
        .status(404)
        .json({ Message: "There is nothing to show you currently" });
    }
    return res.status(200).json({ product: validProducts });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
module.exports = { getProduct };
