const bcrypt = require("bcrypt");
const decrypt = require("../utils/usefulFunction/decryption");
const prisma = require("../shortcut/prisma_initilization");

const changePassword = async (req, res) => {
  try {
    if (
      req.body.email &&
      req.body.password &&
      req.body.cnfpassword &&
      req.body.password === req.body.cnfpassword
    ) {
      const decryptemail = decrypt(req.body.email);
      const validUser = prisma.users.findUnique({
        where: { email: decryptemail },
      });
      if (!validUser) {
        return res
          .status(404)
          .json({ Message: "Entered Email ID is not registered" });
      }
      const encryptPassword = await bcrypt.hash(req.body.password, 5);
      const changePassword = await prisma.users.update({
        where: { email: decryptemail },
        data: { password: encryptPassword },
      });
      if (changePassword) {
        console.log("Succesfully Changed Password");
        return res
          .status(200)
          .json({ Message: "Succesfully Changed Password, returning to signin page within 5s" });
      } else {
        return res
          .status(500)
          .json({ Message: "Problem while updating password at DB side" });
      }
    } else {
      return res.status(406).json({
        Message: "Looks like your both password field does not matches",
      });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ Message: "Please Sign In, you are not member of spodemy" });
  }
};
module.exports = { changePassword };
