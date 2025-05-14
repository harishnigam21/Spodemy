import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import pullUser from "../../usefullFunction/directuser";
import Nav from "./Nav";
import Contain from "./Contain";
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
    const getuserurl = "http://localhost:5000/getuserdata";
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
      <Contain user={user} />
    </main>
  );
};
export default Main;
