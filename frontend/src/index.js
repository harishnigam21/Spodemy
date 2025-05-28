import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css';
import App from './App';
import Signin from './Signin';
import Signup from './Signup';
import Forgotpwd from './Forgotpwd';
import Changepassword from './Changepassword';
import MainAdmin from './Main/admin/Main';
import SignoutAdmin from "./Main/admin/Signout";
import MainUser from './Main/user/Main';
import ShopContain from './Main/user/ShopContain';
import AddToCart from './Main/user/AddToCart';
import CheckOutPass from './Main/user/CheckOutPass';
import CheckOutFail from './Main/user/CheckOutFail';
import Order from './Main/user/Order';
import SignoutUser from "./Main/user/Signout";
import logo from './images/logo.png';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/signin",
    element: <Signin logo={logo}/>
  },
  {
    path: "/signup",
    element: <Signup logo={logo}/>
  },
  {
    path: "/forgotpwd",
    element: <Forgotpwd/>
  },
  {
    path: "/forgotpwd/:email/changepassword",
    element: <Changepassword/>
  },
  {
    path: "/main/admin/:email",
    element: <MainAdmin/>
  },
  {
    path: "/main/admin/:email/signout",
    element: <SignoutAdmin/>
  },   
  {
    path: "/main/user/:email",
    element: <MainUser/>
  },
  {
    path: "/main/user/:email/shop",
    element: <ShopContain/>
  },
  {
    path: "main/user/:email/shop/yourcart",
    element:<AddToCart/>
  },
  {
    path: "main/user/:email/shop/yourcart/:transactionid/paymentSuccess",
    element:<CheckOutPass/>
  },
  {
    path: "main/user/:email/shop/yourcart/:transactionid/paymentFail",
    element:<CheckOutFail/>
  },
  {
    path: "main/user/:email/shop/yourorder",
    element:<Order/>
  },
  {
    path: "/main/user/:email/signout",
    element: <SignoutUser/>
  }   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
