const prisma = require("./prisma_initilization");
const signoutUser = async (req, res) => {
  const cookies = req.cookies;
  //listing cookies
  const jwt = cookies.jwt;
  const emenc = cookies.emenc;
  const validUser = await prisma.users.findUnique({
    where: {
      referenceToken : jwt,
    },
  });
  try {
    if (!jwt && !emenc) {
      return res.status(404).json({ Message: "You have already Signed Out" });
    }
    if (!validUser) {
      res.clearCookie("jwt");
      res.clearCookie("emenc");
      return res.sendStatus(404);
    }
    validUser.referenceToken = "";

    const updateUserRF = await prisma.users.update({
      where: {
        id: validUser.id,
      },
      data: {
        referenceToken: `Signd out ${validUser.email}`,
      },
    });
    try {
        if(updateUserRF){
            console.log("Successfully updated token for signed out user");
        }
    } catch (error) {
        console.log(error);
    }

    res.clearCookie("jwt");
    res.clearCookie("emenc");
    return res.status(200).json({ Message: "You are signed out" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Server Side error" });
  }
};
module.exports = { signoutUser };
