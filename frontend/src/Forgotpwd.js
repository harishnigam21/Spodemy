import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { useState } from "react";
const Forgotpwd = () => {
  const [email, setEmail] = useState("");
  const path = window.location.href;
  const forgotpasswordurl = `${process.env.REACT_APP_BACKEND_HOST}/forgotpassword`;
  const responseMessage = async (response) => {
    const statusMessage = JSON.parse(JSON.stringify(await response.json()));
    document.getElementById("error").innerText = statusMessage.Message;
    // alert(statusMessage.Message);
  };
  const getPassword = async () => {
    const response = await fetch(forgotpasswordurl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, path }),
    });
    if (response.ok) {
      responseMessage(response);
      //page to forward
    } else {
      responseMessage(response);
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="forgotpwd">
      <Link to="/">
        <img src={logo} alt="refresh" />
      </Link>
      <br></br>
      <input
        type="email"
        placeholder="Enter your email id"
        onChange={(e) => setEmail(e.target.value)}
        autoFocus
        required
      />
      <br />
      <p id="error" style={{ color: "red" }}></p>
      <button type="submit" onClick={getPassword}>
        Submit
      </button>
      <br></br>
      <p>
        {" "}
        If remembered password, then visit{" "}
        <Link to="/signin" className="forgotpwdsignin">
          Sign In
        </Link>{" "}
        page
      </p>
    </form>
  );
};
export default Forgotpwd;
