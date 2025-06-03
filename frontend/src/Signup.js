/* eslint-disable eqeqeq */
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Signup = ({ logo }) => {
  const [dobtype, setDobtype] = useState("text");
  const [firstname, setFirstname] = useState("");
  const [firstnameerror, setFirstnameerror] = useState("none");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [emailerror, setEmailerror] = useState("none");
  const [mobilenumber, setMobilenumber] = useState("");
  const [mobilenumbererror, setMobilenumbererror] = useState("none");
  const [password, setPassword] = useState("");
  const [cnfpassword, cnfsetPassword] = useState("");
  const [passworderror, setPassworderror] = useState("none");
  const [cnfpassworderror, setcnfPassworderror] = useState("none");
  const [adminuser, setAdminuser] = useState("none");
  let vote = [];

  const userRef = useRef(null); // Created a ref for the user strong element
  const adminRef = useRef(null); // Created a ref for the admin strong element
  const noteRef = useRef(null);
  useEffect(() => {
    if (adminuser === "none" && noteRef.current) {
      noteRef.current.textContent =
        "Note : Slecting your role is mandatory here";
    } else if (noteRef.current) {
      noteRef.current.textContent =
        "NOTE - fill all mandatory field to activate submit button !";
    }
  }, [adminuser]);

  const signupurl = "https://spodemy.vercel.app/signup";

  //This function will give json Message, which you have given with status at backend
  const responseMessage = async (response, color) => {
    const statusMessage = JSON.parse(JSON.stringify(await response.json()));
    const forresponseonly = document.querySelector("#displayresponsemessage");
    forresponseonly.textContent = statusMessage.Message;
    forresponseonly.style.color = color;
    // alert(statusMessage.Message);
  };

  const onclickUser = (event) => {
    if (userRef.current) {
      userRef.current.style.backgroundColor = "red";
    }
    if (adminRef.current) {
      adminRef.current.style.backgroundColor = "transparent";
    }
    setAdminuser("User");
  };

  const onclickAdmin = (event) => {
    if (adminRef.current) {
      adminRef.current.style.backgroundColor = "blue";
    }
    if (userRef.current) {
      userRef.current.style.backgroundColor = "transparent";
    }
    setAdminuser("Admin");
  };

  const dateOnfocus = () => {
    setDobtype("date");
  };
  const dateOnBlur = () => {
    setDobtype("text");
  };
  const postData = async (event) => {
    event.preventDefault();
    const response = await fetch(signupurl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        adminuser,
        firstname,
        middlename,
        lastname,
        dob,
        gender,
        email,
        mobilenumber,
        password,
      }),
    });
    if (response.ok) {
      responseMessage(response, "green");
      setTimeout(() => {
        window.location.replace("/signin");
      }, 5000);
    } else if (response.status === 403) {
      responseMessage(response, "green");
      setTimeout(() => {
        window.location.replace("/signin");
      }, 5000);
    } else if (response.status === 404) {
      responseMessage(response, "red");
    } else if (response.status === 507) {
      responseMessage(response, "red");
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } else if (response.status === 500) {
      responseMessage(response, "red");
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  };
  const firstnameregex = () => {
    const regex = /(^[A-Z])\w+\D+\S/g;
    const data = firstname.match(regex);
    return data;
  };
  const lastnameregex = () => {
    const regex = /(^[A-Z])\w+\D+\S/g;
    const data = lastname.match(regex);
    return data;
  };
  const emailregex = () => {
    const regex = /(^[a-z]\w+\d+[@][a-z]\w+[.][a-z]\w+)\S/g;
    const data = email.match(regex);
    return data;
  };
  const mobileregex = () => {
    const regex = /^(\d{10})+/g;
    const data = mobilenumber.match(regex);
    return data;
  };
  const pwdchar = () => {
    const regex = /^.{8,}/g;
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
  return (
    <form className="signupform" onSubmit={(e) => e.preventDefault()}>
      <div className="signup">
        <Link to="/">
          <img src={logo} alt="refresh" />
        </Link>
        <h1>Sign Up</h1>
        <div className="partition">
          <div>
            <strong id="user" onClick={(e) => onclickUser(e)} ref={userRef}>
              User
            </strong>
            <strong id="admin" onClick={(e) => onclickAdmin(e)} ref={adminRef}>
              Admin
            </strong>
          </div>
        </div>
        {adminuser == "none" ? (
          <></>
        ) : (
          <div className="signupinput">
            <div className="name">
              <input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="First name*"
                autoFocus
                onChange={(e) => setFirstname(e.target.value)}
                onFocus={() => setFirstnameerror("block")}
                required
              />
              <input
                id="middlename"
                name="middlename"
                type="text"
                placeholder="Middle name"
                onChange={(e) => setMiddlename(e.target.value)}
              />
              <input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Last name*"
                onChange={(e) => setLastname(e.target.value)}
                required
              />
              {firstname == firstnameregex() && lastname == lastnameregex() ? (
                (vote[0] = true)
              ) : (
                <ol className="name" style={{ display: `${firstnameerror}` }}>
                  <li>No space should be in the field</li>
                </ol>
              )}
            </div>
            <div className="dob/gender">
              <input
                id="dob"
                name="dob"
                type={dobtype}
                placeholder="DOB*"
                onFocus={dateOnfocus}
                onBlur={dateOnBlur}
                onChange={(e) => setDob(e.target.value)}
                required
              />
              <select
                id="gender"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="nothing" defaultValue>
                  Select Gender*
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="email">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Email ID*"
                onFocus={() => setEmailerror("block")}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button onClick={(e) => e.preventDefault()}>Get Verify</button>
              {email == emailregex() ? (
                (vote[1] = true)
              ) : (
                <ol style={{ display: `${emailerror}` }}>
                  <li>Format : abcd@stu.xyz</li>
                  <li>Verify it</li>
                </ol>
              )}
            </div>
            <div className="mobilenumber">
              <input
                id="mobilenumber"
                name="mobilenumber"
                type="text"
                placeholder="Enter Mobile number*"
                onChange={(e) => setMobilenumber(e.target.value)}
                onFocus={() => setMobilenumbererror("inline-block")}
                required
              />
              {mobilenumber == mobileregex() ? (
                (vote[2] = true)
              ) : (
                <ol
                  style={{ display: `${mobilenumbererror}`, listStyle: "none" }}
                >
                  <li>Format : 89xxxx8xx2 & no space</li>
                </ol>
              )}
            </div>
            <div className="password">
              <input
                id="password"
                type="password"
                placeholder="Enter Password*"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setPassworderror("inline-block")}
                required
              />
              <ol style={{ display: `${passworderror}` }}>
                {password.includes(pwdchar()) ? (
                  (vote[3] = true)
                ) : (
                  <li>Minimum 8 character</li>
                )}
                {pwdcapital() ? (
                  (vote[4] = true)
                ) : (
                  <li>atleast 1 capital letter</li>
                )}
                {pwdnumber() ? (vote[5] = true) : <li>atleast one number</li>}
                {pwdsymbol() ? (
                  (vote[6] = true)
                ) : (
                  <li>atleast 1 symbol (!@#$%^&*)</li>
                )}
              </ol>
            </div>
            <div className="cnfpassword">
              <input
                id="cnfpassword"
                type="password"
                placeholder="Confirm password*"
                onChange={(e) => cnfsetPassword(e.target.value)}
                onFocus={() => setcnfPassworderror("inline-block")}
                required
              />
              <ol style={{ display: `${cnfpassworderror}` }}>
                {cnfpassword === password && cnfpassword !== "" ? (
                  <li style={{ listStyle: "none", color: "green" }}>
                    Password Matches
                  </li>
                ) : (
                  <li style={{ listStyle: "none", color: "red" }}>
                    Password not matches
                  </li>
                )}
              </ol>
            </div>
          </div>
        )}
        {firstname !== "" &&
        lastname !== "" &&
        dob !== "" &&
        gender !== "" &&
        gender !== "nothing" &&
        email !== "" &&
        password !== "" &&
        cnfpassword !== "" &&
        cnfpassword === password &&
        vote[0] &&
        vote[1] &&
        vote[2] &&
        vote[3] &&
        vote[4] &&
        vote[5] &&
        vote[6] ? (
          <div className="signupbtn">
            <button onClick={(e) => postData(e)}>Sign Up</button>
          </div>
        ) : (
          <p ref={noteRef} style={{ color: "red", fontWeight: "bold" }}>
            NOTE - fill all mandatory field to activate submit button !
          </p>
        )}
        <p
          id="displayresponsemessage"
          style={{ color: "green", fontWeight: "bold" }}
        ></p>
        <p>
          Already have account then -{" "}
          <Link to="/signin" id="signinlink">
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
};
export default Signup;
