/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import logo from "./images/logo.png";
const Changepassword = () => {
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfpassword] = useState("");
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const params = useParams();
  let vote = [];
  const changepasswordurl = "http://localhost:5000/changepassword";
  const email = params.email;
  const responseMessage = async (response) => {
    const statusMessage = JSON.parse(JSON.stringify(await response.json()));
    document.getElementById("vacant").innerText = statusMessage.Message;
  };
  const changenow = async () => {
    const response = await fetch(changepasswordurl, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, cnfpassword }),
    });
    if (response.ok) {
      responseMessage(response);
      setTimeout(() => {
        window.location.replace("/signin");
      }, 5000);
    } else {
      responseMessage(response);
    }
  };
  const pwdchar = () => {
    const regex = /\b\S{8,}\b/g;
    const data = password.match(regex);
    return data;
  };
  const pwdcapital = () => {
    const regex = /([A-Z])/g;
    const data = password.match(regex);
    let result = false;
    if (data !== null) {
      const length = data.length;
      length > 0 ? (result = true) : (result = false);
    }
    return result;
  };
  const pwdnumber = () => {
    const regex = /([0-9])/g;
    const data = password.match(regex);
    let result = false;
    if (data !== null) {
      const length = data.length;
      length > 0 ? (result = true) : (result = false);
    }
    return result;
  };
  const pwdsymbol = () => {
    const regex = /[@#$%^&*]/g;
    const data = password.match(regex);
    let result = false;
    if (data !== null) {
      const length = data.length;
      length > 0 ? (result = true) : (result = false);
    }
    return result;
  };
  useEffect(() => {
    for (let i = 0; i <= 60; i++) {
      setTimeout(() => {
        setSecond(i);
        if (i === 60) {
          setSecond(0);
          setMinute(minute + 1);
          if (minute === 59) {
            setMinute(0);
            setHour(hour + 1);
          }
        }
      }, 1000 * i);
    }
    if (hour >= 0 && minute >= 5 && second >= 0) {
      window.location.replace("/Forgotpwd");
    }
  }, [minute, hour]);
  return (
    <div id="changepassword">
      <div id="form">
        <Link to={"/"}>
          <img
            style={{ width: "calc(3rem + 5vw)" }}
            src={logo}
            alt="refresh"
            onClick={() => {
              window.location.replace("/");
            }}
          />
        </Link>
        <p
          style={{ fontSize: "x-large", color: "green", fontWeight: "bolder" }}
        >
          Expires In 5 minutes = {hour} : {minute} : {second}
        </p>
        <input
          id="passwordfield"
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <ol id="errorlist">
          {password == pwdchar() ? (
            (vote[0] = true)
          ) : (
            <li>Minimum 8 character</li>
          )}
          {pwdcapital() ? (vote[1] = true) : <li>atleast 1 capital letter</li>}
          {pwdnumber() ? (vote[2] = true) : <li>atleast one number</li>}
          {pwdsymbol() ? (
            (vote[3] = true)
          ) : (
            <li>atleast 1 symbol (!@#$%^&*)</li>
          )}
          {password == cnfpassword ? (vote[4] = true) : <li>match password</li>}
          <li id="vacant"></li>
        </ol>
        <input
          id="cnfpasswordfield"
          type="text"
          placeholder="Confirm password"
          onChange={(e) => setCnfpassword(e.target.value)}
          required
        />
        {vote[0] && vote[1] && vote[2] && vote[3] && vote[4] ? (
          <button id="button" onClick={changenow}>
            Change
          </button>
        ) : (
          <p
            style={{
              color: "red",
              textAlign: "center",
              fontSize: "larger",
              fontWeight: "bold",
              fontFamily:
                "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
            }}
          >
            Fill all mandatory field to activate button !
          </p>
        )}
      </div>
    </div>
  );
};
export default Changepassword;
