const verifyUser = require("../utils/usefulFunction/verifyUser");
const prisma = require("../shortcut/prisma_initilization");
const update = async (req, res) => {
  try {
    const email = verifyUser(req, res);
    if (!email) {
      return email;
    }
    if (!req.body.updatelogs) {
      return res
        .status(404)
        .json({ Message: "Missing important data in body" });
    }

    const logs = req.body.updatelogs;
    async function updateProductsFromTargetValueData(changesData) {
      try {
        const updateOperations = changesData.map((item) => {
          const productId = item.id;
          const updatesArray = item.data;

          const dataToUpdate = updatesArray.reduce((acc, current) => {
            let value = current.value;
            if (
              current.target === "ProductQuantity" ||
              current.target === "ProductPrice"
            ) {
              value = parseInt(value, 10);
              if (isNaN(value)) {
                console.warn(
                  `Invalid number for ${current.target} on product ID ${productId}: ${current.value}`
                );
                return acc;
              }
            }
            return {
              ...acc,
              [current.target]: value,
            };
          }, {});

          return prisma.products.update({
            where: { ProductId: productId },
            data: dataToUpdate,
          });
        });
        const updatedRecords = await prisma.$transaction(updateOperations);
        if (!updatedRecords) {
          return res
            .status(503)
            .json({ Message: "Unable to update data at DB side" });
        }
        console.log("Successfully updated products");
        return res
          .status(200)
          .json({ Message: "Successfully updated products" });
      } catch (error) {
        console.error("Error updating products:", error);
        return res
          .status(500)
          .json({ Message: `Error updating products : ${error}` });
      }
    }
    updateProductsFromTargetValueData(logs);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: error });
  }
};
module.exports = { update };
