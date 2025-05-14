const prisma = require("../shortcut/prisma_initilization");
const decrypt = require("../utils/usefulFunction/decryption");

const deleteCart = async (req, res) => {
  const { productId } = req.body;
  const cookies = req.cookies;

  if (!productId) {
    return res.status(400).json({ Message: "Product ID is missing" });
  }
  if (!cookies || !cookies.emenc) {
    return res
      .status(401)
      .json({ Message: "Authentication cookies are missing" });
  }

  const encryptedEmail = cookies.emenc;
  const decryptedEmail = decrypt(encryptedEmail);
  if (!decryptedEmail) {
    return res.status(424).json({ Message: "Failed to decrypt user email" });
  }

  try {
    // Update beforebuying cart
    const userBB = await prisma.beforebuying.findMany({
      where: { email: decryptedEmail, transactionid: null },
      orderBy: { createdAt: "desc", },
      take: 1,
    });
    if (userBB) {
      const currentCart = JSON.parse(userBB[0].usrcartobj);
      const updatedCart = currentCart.filter(
        (item) => parseInt(item.id) !== parseInt(productId)
      );
      await prisma.beforebuying.update({
        where: { email: decryptedEmail, id: userBB[0].id },
        data: { usrcartobj: JSON.stringify(updatedCart) },
      });
      console.log("Successfully updated usrcartobj");
    } else {
      console.log("beforebuying cart not found or empty");
    }

    // Update usercart itemsid
    const userUC = await prisma.usercart.findUnique({
      where: { email: decryptedEmail },
    });
    if (userUC) {
      const currentItems = JSON.parse(userUC.itemsid);
      const updatedItems = currentItems.filter(
        (itemId) => parseInt(itemId) !== parseInt(productId)
      ); // Ensuring integer comparison
      await prisma.usercart.update({
        where: { email: decryptedEmail },
        data: {
          itemsid: JSON.stringify(updatedItems),
          totalItem: updatedItems.length,
        },
      });
      console.log("Successfully updated itemsid");
    } else {
      console.log("usercart not found or itemsid is empty");
    }

    return res
      .status(200)
      .json({ Message: "Cart updated successfully after item deletion" });
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return res
      .status(500)
      .json({ Message: `Failed to delete item from cart: ${error.message}` });
  }
};

module.exports = { deleteCart };
