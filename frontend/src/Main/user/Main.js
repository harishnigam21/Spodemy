import { useState, useEffect, useRef } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import pullUser from "../../usefullFunction/directuser";
import Nav from "./Nav";
import academy from "../../images/academy.png";
import esport from "../../images/esport.png";
import gym from "../../images/gym.png";
import shop from "../../images/shop.png";
import spoblogs from "../../images/spoblogs.png";
import tournament from "../../images/tournament.png";
const Main = () => {
  const [user, setUser] = useState({});
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const errorRef = useRef(null);
  const params = useParams();
  const emailenc = params.email;
  const currentLocation = window.location.href;
  const updateforlogout = `${currentLocation}/signout`;
  //pull User, who are not signed in
  pullUser(emailenc);
  //for user who signed in and then we fetch user information
  useEffect(() => {
    if (section1Ref.current) {
      params.service === undefined
        ? (section1Ref.current.style.display = "flex")
        : (section1Ref.current.style.display = "none");
    } else if (section2Ref.current) {
      if (
        params.service === "shop" ||
        params.service === "academy" ||
        params.service === "esport" ||
        params.service === "gym" ||
        params.service === "tournament"
      ) {
        section2Ref.current.style.display = "block";
      } else {
        section2Ref.current.style.display = "none";
        if (errorRef.current) {
          errorRef.current.style.display = "flex";
          errorRef.current.textContent =
            "404 : Sorry, we don't provide any such kind of service";
        }
      }
    }
  }, [params]);
  useEffect(() => {
    const getuserurl = "https://spodemy.vercel.app/getuserdata";
    const getUser = async () => {
      const response = await fetch(getuserurl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        const validUser = (await response.json()).user;
        setUser(validUser);
      } else {
        window.location.replace("/signin");
      }
    };
    getUser();
  }, []);
  return (
    <main style={{ position: "relative" }}>
      <Nav user={user} updateforlogout={updateforlogout} />
      <div ref={section1Ref} className="listallservice">
        <header>Select Services</header>
        <div className="innerDiv">
          <section>
            <div>
              <strong>Sports Academy's</strong>
              <p id="serviceInfo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                nihil in suscipit quisquam qui amet sapiente exercitationem
                officia consequuntur ex. Fuga voluptate dolorum aut eum
                accusamus reprehenderit provident natus neque!
              </p>
              <img src={academy} alt="refresh"/>
              <Link className="link" to={`${window.location.href}/academy`}>
                <button type="button">Visit there</button>
              </Link>
            </div>
          </section>
          <section>
            <div>
              <strong>Tournament's</strong>
              <p id="serviceInfo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                nihil in suscipit quisquam qui amet sapiente exercitationem
                officia consequuntur ex. Fuga voluptate dolorum aut eum
                accusamus reprehenderit provident natus neque!
              </p>
              <img src={tournament} alt="refresh"/>
              <Link className="link" to={`${window.location.href}/tournament`}>
                <button type="button">Visit there</button>
              </Link>
            </div>
          </section>
          <section>
            <div>
              <strong>Sport Shop's</strong>
              <p id="serviceInfo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                nihil in suscipit quisquam qui amet sapiente exercitationem
                officia consequuntur ex. Fuga voluptate dolorum aut eum
                accusamus reprehenderit provident natus neque!
              </p>
              <img src={shop} alt="refresh"/>
              <Link className="link" to={`${window.location.href}/shop`}>
                <button type="button">Visit there</button>
              </Link>
            </div>
          </section>
          <section>
            <div>
              <strong>Sport Blog's</strong>
              <p id="serviceInfo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                nihil in suscipit quisquam qui amet sapiente exercitationem
                officia consequuntur ex. Fuga voluptate dolorum aut eum
                accusamus reprehenderit provident natus neque!
              </p>
              <img src={spoblogs} alt="refresh"/>
              <Link className="link" to={`${window.location.href}/spoblogs`}>
                <button type="button">Visit there</button>
              </Link>
            </div>
          </section>
          <section>
            <div>
              <strong>e-Sport's</strong>
              <p id="serviceInfo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                nihil in suscipit quisquam qui amet sapiente exercitationem
                officia consequuntur ex. Fuga voluptate dolorum aut eum
                accusamus reprehenderit provident natus neque!
              </p>
              <img src={esport} alt="refresh"/>
              <Link className="link" to={`${window.location.href}/esport`}>
                <button type="button">Visit there</button>
              </Link>
            </div>
          </section>
          <section>
            <div>
              <strong>Gym's</strong>
              <p id="serviceInfo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                nihil in suscipit quisquam qui amet sapiente exercitationem
                officia consequuntur ex. Fuga voluptate dolorum aut eum
                accusamus reprehenderit provident natus neque!
              </p>
              <img src={gym} alt="refresh"/>
              <Link className="link" to={`${window.location.href}/gym`}>
                <button type="button">Visit there</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <div ref={section2Ref} className="outlet">
        <Outlet />
      </div>
      <h1
        ref={errorRef}
        style={{
          display: "none",
          color: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        .
      </h1>
    </main>
  );
};
export default Main;
