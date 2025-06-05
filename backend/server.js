const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/cors");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
require("dotenv").config();
const PORT = process.env.PORT || 8080;

//middleware
app.use(credentials);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

//general
app.use("/", require("./routes/signup"));
app.use("/", require("./routes/signin"));
app.use("/", require("./routes/forgotpassword"));
app.use("/", require("./routes/changepassword"));
app.use("/", require("./routes/uploadthing"));
app.use("/", require("./routes/getUserdata"));
app.use("/", require("./routes/directUser"));
app.use("/", require("./routes/signout"));


// user
app.use("/", require("./routes/getProductdata"));
app.use("/", require("./routes/getallProductdata"));
app.use("/", require("./routes/postCartdata"));
app.use("/", require("./routes/getCartdata"));
app.use("/", require("./routes/getCartItem"));
app.use("/", require("./routes/getupdatedCart"));
app.use("/", require("./routes/updatedCart"));
app.use("/", require("./routes/deleteCartitem"));
app.use("/", require("./routes/wishList"));
app.use("/", require("./routes/providepublishKey"));
app.use("/", require("./routes/checkOut"));
app.use("/", require("./routes/verifyTransaction"));
app.use("/", require("./routes/getOrderitem"));


//seller
app.use("/", require("./routes/shopDetails"));

app.get("/", (req, res) => {
  res.send("Welcome to Spodemy!");
});

app.listen(PORT, () => {
  console.log(`Your backend is running on PORT no : ${PORT}`);
});
