import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import pullUser from "../../usefullFunction/directuser";
import Nav from "./Nav";
const Main = () => {
  const [user, setUser] = useState({});
  const params = useParams();
  const emailenc = params.email;
  const currentLocation = window.location.href;
  const updateforlogout = `${currentLocation}/signout`;
  //pull User, who are not signed in
  pullUser(emailenc);
  //for user who signed in and then we fetch user information
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
    <main>
      <Nav user={user} updateforlogout={updateforlogout} />
      <div className="listallservice">
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
      {/* <Contain user={user} /> */}
    </main>
  );
};
export default Main;
