const bcrypt = require('bcrypt');
const prisma = require("../shortcut/prisma_initilization");
const date = require("../utils/usefulFunction/returnDate");
const getUser = async (req, res) => {
  if (
    req.body.firstname &&
    req.body.lastname &&
    req.body.dob &&
    req.body.gender &&
    req.body.email &&
    req.body.mobilenumber &&
    req.body.password
  ) {
    try {
      const existingUser = await prisma.users.findUnique({
        where: {
          email: req.body.email,
        },
      });

      const encryptpassword = await bcrypt.hash(req.body.password, 5);
      const addedUser = {
        userType: req.body.selleruser,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        dob: req.body.dob,
        gender: req.body.gender,
        email: req.body.email,
        mobileno: req.body.mobilenumber,
        password: encryptpassword,
        createdUser: date(),
        referenceToken: `just signupped ${req.body.email}`,
      };

      if (!existingUser) {
        const newUser = await prisma.users.create({ data: addedUser });
        try {
          if(newUser){
            console.log('From DB : 201 : New User created successfully');
          }
        } catch (error) {
          console.log(`From DB : 409 : ${error}`);
        }
        return res.status(200).json({ Message: 'Now you are the member of Spodemy, visiting at SignIn page in 5s...' });
      } else {
        return res.status(403).json({ Message: "Hey! you are already part Spodemy. Redirecting you to signin page in 5s...." });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      return res.status(500).json({ Message: "Something went wrong, please try again" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    return res.status(400).json({ Message: "Missing required fields" });
  }
};

module.exports = { getUser };
// export default getUser;