const users = {
  user: require("../model/registration.json"),
  setUser: function (data) {
    this.user = data;
  },
};
const fs = require('fs').promises;
const bcrypt = require("bcrypt");
const decrypt = require('../usefulFunction/decryption');
const path = require('path');
const changePassword = async (req, res) => {
  try {
    if (
      req.body.email &&
      req.body.password &&
      req.body.cnfpassword &&
      req.body.password === req.body.cnfpassword
    ) {
      const decryptemail = decrypt(req.body.email);
      const validUser = users.user.find((item) => item.email === decryptemail);
      const otherUser = users.user.filter((item) => item.email !== decryptemail);
      if (!validUser) {
        return res.status(404).json({ Message: "Email ID is not registered" });
      }
      const encryptPassword = await bcrypt.hash(req.body.password, 5);
      validUser.password = encryptPassword;
      users.setUser([...otherUser,validUser]);
      await fs.writeFile(path.join(__dirname,'..','model','registration.json'),JSON.stringify(users.user),(error)=>{if(error){return res.status(507).json({Message:"DB is not responding"})}});
      return res.status(200).json({Message : 'Succesfully Changed'});
    } else {
      return res.status(406).json({Message: "Looks like your both password field does not matches"});
    }
  } catch (error) {
    return res.status(500).json({Message : 'Please Sign In, you are not member of spodemy'});
  }
};
module.exports = { changePassword };