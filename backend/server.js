const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/cors");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
require("dotenv").config();
const PORT = process.env.PORT;

//middleware
app.use(credentials);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(require("./router/signup"));
app.use(require("./router/signin"));
app.use(require("./router/forgotpassword"));
app.use(require("./router/changepassword"));
app.use(require("./router/getUserdata"));
app.use(require("./router/getProductdata"));
app.use(require("./router/getallProductdata"));
app.use(require("./router/postCartdata"));
app.use(require("./router/getCartdata"));
app.use(require("./router/getCartItem"));
app.use(require("./router/getupdatedCart"));
app.use(require("./router/updatedCart"));
app.use(require("./router/deleteCartitem"));
app.use(require("./router/providepublishKey"));
app.use(require("./router/checkOut"));
app.use(require("./router/verifyTransaction"));
app.use(require("./router/getOrderitem"));
app.use(require("./router/directUser"));
app.use(require("./router/signout"));

app.listen(PORT, () => {
  console.log(`Your backend is running on PORT no : ${PORT}`);
});
