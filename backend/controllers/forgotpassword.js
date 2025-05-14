const nodemailer = require("nodemailer");
const encrypt = require("../utils/usefulFunction/encryption");
const prisma = require("../shortcut/prisma_initilization");
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODE_MAILER_EMAIL,
    pass: process.env.NODE_MAILER_KEY,
  },
});

const forgotPassword = async (req, res) => {
  const userEmail = req.body.email;
  if (!userEmail) {
    return res
      .status(404)
      .json({ Message: "Please input your email to move forward" });
  }
  const validUser = await prisma.users.findUnique({
    where: { email: userEmail },
  });
  if (!validUser) {
    return res
      .status(404)
      .json({ Message: "Entered Email ID is not registered"});
  }
  const pathToDirect = req.body.path;

  try {
    const useremail = validUser.email;
    console.log(useremail);
    const encryptemail = encrypt(useremail);
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Spodemy India" <bhanihasunigam74@gmail.com>', // sender address
      to: `${useremail}`, // list of receivers
      subject: "Email ID Verification", // Subject line
      html: `<h1 style="text-align: center;">Change Password</h1>
                <strong style="display: block;text-align: center;">Hello ${validUser.firstname}, as per your request to change password. Please visit our <a style="text-decoration: none;color: blue;" href=${pathToDirect}/${encryptemail}/changepassword>Change Password</a> Section.</strong>
                `, // html body
    });
    console.log("Email sent successfully: %s", info.messageId);
    res
      .status(200)
      .json({
        Message:
          "Password Reset Link has been send to your registered Email ID",
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        Message:
          "Sorry for inconvenience,at this time we are unable to send Password reset link",
      });
  }
};
module.exports = { forgotPassword };
