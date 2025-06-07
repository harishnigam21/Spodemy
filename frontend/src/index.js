import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Signin from "./Signin";
import Signup from "./Signup";
import Forgotpwd from "./Forgotpwd";
import Changepassword from "./Changepassword";

//Seller
import MainSeller from "./Main/seller/Main";
import Registershop from "./Main/seller/shop/Registershop";
import UpdateStock from "./Main/seller/shop/UpdateStock";
import SignoutSeller from "./Main/seller/Signout";

// User
import MainUser from "./Main/user/Main";
import ServiceLoader from "./Main/user/ServiceLoader";
import AddToCart from "./Main/user/shop/AddToCart";
import CheckOutPass from "./Main/user/shop/CheckOutPass";
import CheckOutFail from "./Main/user/shop/CheckOutFail";
import Order from "./Main/user/shop/Order";
import SignoutUser from "./Main/user/Signout";
import logo from "./images/logo.png";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signin",
    element: <Signin logo={logo} />,
  },
  {
    path: "/signup",
    element: <Signup logo={logo} />,
  },
  {
    path: "/forgotpwd",
    element: <Forgotpwd />,
  },
  {
    path: "/forgotpwd/:email/changepassword",
    element: <Changepassword />,
  },
  {
    path: "/main/seller/:email/shop",
    element: <MainSeller />,
  },
  {
    path: "/main/seller/:email/shop/registershop",
    element: <Registershop />,
  },
  {
    path: "/main/seller/:email/shop/:shopname/updatestock",
    element: <UpdateStock />,
  },

  {
    path: "/main/seller/:email/signout",
    element: <SignoutSeller />,
  },
  {
    path: "/main/user/:email",
    element: <MainUser />,
    children: [
      {
        path: "/main/user/:email/:service",
        element: <ServiceLoader />,
      },
    ],
  },
  {
    path: "main/user/:email/shop/yourcart",
    element: <AddToCart />,
  },
  {
    path: "main/user/:email/shop/yourcart/:transactionid/paymentSuccess",
    element: <CheckOutPass />,
  },
  {
    path: "main/user/:email/shop/yourcart/:transactionid/paymentFail",
    element: <CheckOutFail />,
  },
  {
    path: "main/user/:email/shop/yourorder",
    element: <Order />,
  },
  {
    path: "/main/user/:email/signout",
    element: <SignoutUser />,
  },
  {
    path: "/main/user/:email/:service/signout",
    element: <SignoutUser />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
