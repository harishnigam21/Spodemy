const fs = require('fs').promises;
const path = require('path');
const users = require('../model/registration.json'); 
const nodemailer = require('nodemailer');
const encrypt = require('../usefulFunction/encryption');
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "bhanihasunigam74@gmail.com",
      pass: "rull iebi qdby esoo", //rull iebi qdby esoo
    },
  });

const forgotPassword = async(req,res) =>
    {
        const validUser = users.find((item)=>item.email === req.body.email);
        const pathToDirect = req.body.path; 
        if(!validUser)
            {
                return res.status(404).json({Message : "Entered Email ID is not registered"});
            }
        try {
            const useremail = validUser.email;
            const encryptemail = encrypt(useremail);
            // send mail with defined transport object
            const info = await transporter.sendMail({
                from: '"Spodemy India" <bhanihasunigam74@gmail.com>', // sender address
                to: `${useremail}`, // list of receivers
                subject: "Email ID Verification", // Subject line
                html: `<h1 style="text-align: center;">Change Password</h1>
                <strong style="display: block;text-align: center;">Hello ${validUser.firstname}, as per your request to change password. Please visit our <a style="text-decoration: none;color: blue;" href=${pathToDirect}/${encryptemail}/changepassword>Change Password</a> Section.</strong>
                ` // html body 
            });
            console.log("Message sent: %s", info.messageId);
            res.status(200).json({Message:"Password Reset Link has been send to your registered Email ID"});
        } catch (error) {
            res.status(500).json({Message : 'Sorry for inconvenience,at this time we are unable to send Password reset link'});
        }
    }
module.exports = {forgotPassword};