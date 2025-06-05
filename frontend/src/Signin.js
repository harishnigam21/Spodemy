import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Loader from "./Loarder.js";
const Signin = ({ logo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signinRef = useRef(null);
  const signinurl = `${process.env.REACT_APP_BACKEND_HOST}/signin`;

  const responseMessage = async (response) => {
    const statusMessage = JSON.parse(JSON.stringify(await response.json()));
    if (response.ok) {
      setTimeout(() => {
        if (statusMessage.userType === "Seller") {
          window.location.replace(`/main/seller/${statusMessage.email}/shop`);
        } else if (statusMessage.userType === "User") {
          window.location.replace(`/main/user/${statusMessage.email}`);
        } else {
          alert("You are trying to reach in wrong way");
          window.location.replace("/signin");
        }
      }, 2000);
    } else {
      alert(statusMessage.Message);
    }
  };

  const verifyUser = async () => {
    const response = await fetch(signinurl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    //I have invested more than 5 hour to understand that why credential and when to use - what I was doing, I have included credential in Main.js where I was using cookies that is generated during Signin and I have not included credential here, when I was sending request to sign in and to generate cookie, due to which cookie is not generating at browser side, and I have searched for loots and I didn't get anything.
    //Now, got that how to use credentials.
    if (response.ok) {
      if (signinRef.current) {
        signinRef.current.style.display = "flex";
      }
      document.getElementById("emailerror").innerText = "";
      responseMessage(response);
    } else if (response.status === 404) {
      document.getElementById("emailerror").innerText =
        "Email ID is not registered";
    } else if (response.status === 401) {
      document.getElementById("emailerror").innerText =
        "emailid/password is incorrect";
    } else {
      document.getElementById("emailerror").innerText = "";
      responseMessage(response);
    }
  };
  return (
    <form className="signinform" onSubmit={(e) => e.preventDefault()}>
      <div className="signin">
        <Link to="/">
          <img id="logo" src={logo} alt="refresh" />
        </Link>
        <h1>Sign In</h1>
        <input
          id="email"
          type="email"
          placeholder="Enter your Email ID*"
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          autoComplete="true"
          required
        />
        <br />
        <p id="emailerror" style={{ color: "red" }}></p>
        <input
          id="password"
          type="password"
          placeholder="Enter your Password*"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        {email !== "" && password !== "" ? (
          <button id="verifyemail" onClick={verifyUser}>
            Sign In
          </button>
        ) : (
          <p id="activatebtn" style={{ color: "red", fontWeight: "bold" }}>
            NOTE - fill all mandatory field to activate submit button !
          </p>
        )}
        <p id="createacc">
          Create New account -{" "}
          <Link id="signbtn" to="/signup">
            SignUp
          </Link>
        </p>
        <p id="fwdtofrgpwd">
          <Link id="frgpwd" to="/forgotpwd">
            Forgot password
          </Link>
          ..?
        </p>
      </div>
      <div ref={signinRef} className="hiddendiv">
        <h1>
          SIGNING YOU IN <Loader />
        </h1>
      </div>
    </form>
  );
};
export default Signin;
