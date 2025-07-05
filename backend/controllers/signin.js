const prisma = require("../shortcut/prisma_initilization");
const encrypt = require("../utils/usefulFunction/encryption");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const verifyUser = async (req, res) => {
  const emailencrypted = encrypt(req.body.email);
  if (req.body.email && req.body.password) {
    try {
      const validUser = await prisma.users.findUnique({
        where: {
          email: req.body.email,
        },
      });
      // console.log(validUser);
      if (!validUser) {
        return res.status(404).json({ Message: "Email ID is not registered" });
      }
      const validUserPassword = await bcrypt.compare(
        req.body.password,
        validUser.password
      );
      if (!validUserPassword) {
        return res
          .status(401)
          .json({ Message: "Entered password is incorrect" });
      }
      const accessToken = jwt.sign(
        { email: validUser.email },
        process.env.ACCESS_TOKEN_KEY,
        { expiresIn: "3600s" }
      );
      // console.log(accessToken);
      const referenceToken = jwt.sign(
        { email: validUser.email },
        process.env.REFERENCE_TOKEN_KEY,
        { expiresIn: "1d" }
      );
      // console.log(referenceToken);
      const updatedUser = await prisma.users.update({
        where: { id: validUser.id },
        data: { referenceToken: referenceToken },
      });
      try {
        if (updatedUser) {
          console.log("Successfully updated token for signed user");
        }
      } catch (error) {
        console.log(error);
      }
      res.cookie("jwt", referenceToken, {
        sameSite: "None",
        httpOnly: true,
        secure: true,
        maxAge: 5 * 60 * 60 * 1000,
      }); //to get user info
      res.cookie("emenc", emailencrypted, {
        sameSite: "None",
        httpOnly: true,
        secure: true,
        maxAge: 5 * 60 * 60 * 1000,
      }); //to pull direct user
      res
        .status(200)
        .json({
          Message: `Welcome to spodemy ${validUser.firstname}`,
          email: emailencrypted,
          userType: validUser.userType,
          nototshare: accessToken,
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Message: "Server Side problem" });
    }
  } else {
    return res.status(404).json({ Message: "Missing Email or Password" });
  }
};
module.exports = { verifyUser };