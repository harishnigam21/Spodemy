import { useState, useEffect, useRef } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import pullUser from "../../usefullFunction/directuser";
import Nav from "./Nav";
const Main = () => {
  const [user, setUser] = useState({});
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const errorRef = useRef(null);
  const [section, setSection] = useState(true);
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
        <h1>Select Services</h1>
        <div>
          <h2>Sports Academy's</h2>
        </div>
        <div>
          <h2>Tournament's</h2>
        </div>
        <Link to={`${window.location.href}/shop`} className="link">
          <div>
            <h2>Sport Shop's</h2>
          </div>
        </Link>
        <div>
          <h2>e-Sport's</h2>
        </div>
        <div>
          <h2>Gym's</h2>
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
      ></h1>
    </main>
  );
};
export default Main;
