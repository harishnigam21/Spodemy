import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import logo from "./images/logo.png";
const Nav = () => {
  const [category, setCategory] = useState(false);
  const [indoor, setIndoor] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const [barIcon, setBarIcon] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screenSize.width <= 780 ? (
    <nav className="navbar">
      <div className="bar">
        <TiThMenu
          className="menubar icon"
          onClick={() => setBarIcon(!barIcon)}
        />
        {barIcon ? (
          <div className="leftlist" style={{ zIndex: "1" }}>
            <li>
              <ImCross className="icon" onClick={() => setBarIcon(!barIcon)} />
            </li>
            <li></li>
            <li className="list">
              <Link className="link" to={location.pathname}>
                Home
              </Link>
            </li>
            <li className="list" id="category">
              <p
                onClick={() => {
                  setCategory(!category);
                  setIndoor(false);
                  setOutdoor(false);
                }}
              >
                Categories
                <FaCaretDown className="icon" />
              </p>

              {category ? (
                <div className="categorylist" style={{ zIndex: "1" }}>
                  <div className="indoor">
                    <p onClick={() => setIndoor(!indoor)}>
                      Indoor
                      <FaCaretDown className="icon" />
                    </p>
                    {indoor ? (
                      <ul className="indoorlist">
                        <li>Chess</li>
                        <li>Carom</li>
                        <li>Pool</li>
                        <li>Ludo</li>
                        <li>Cards</li>
                        <li>Musical Chair</li>
                        <li>Table Tennis</li>
                        <li>Monopoly</li>
                      </ul>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="outdoor">
                    <p onClick={() => setOutdoor(!outdoor)}>
                      Outdoor
                      <FaCaretDown className="icon" />
                    </p>

                    {outdoor ? (
                      <ul className="outdoorlist">
                        <li>Cricket</li>
                        <li>Football</li>
                        <li>Basketball</li>
                        <li>Hockey</li>
                        <li>kho-kho</li>
                        <li>bowling</li>
                      </ul>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </li>
            <li className="list">
              <Link className="link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="list">
              <Link className="link" to="/about">
                About Us
              </Link>
            </li>
            <li className="list">
              <Link className="link" to="/signin">
                Sign In
              </Link>
            </li>
            <li className="list">
              <Link className="link" to="/signup">
                Sign Up
              </Link>
            </li>
          </div>
        ) : (
          <></>
        )}
        <li className="logo">
          <img src={logo} alt="refresh" />
        </li>
      </div>
    </nav>
  ) : (
    <nav className="navbar">
      <div className="bar">
        <div className="leftlist">
          <li className="list">
            <Link className="link" to={location.pathname}>
              Home
            </Link>
          </li>
          <li className="list" id="category">
            <p
              onClick={() => {
                setCategory(!category);
                setIndoor(false);
                setOutdoor(false);
              }}
            >
              Categories
              <FaCaretDown className="icon" />
            </p>

            {category ? (
              <div className="categorylist" style={{ zIndex: "1" }}>
                <div className="indoor">
                  <p onClick={() => setIndoor(!indoor)}>
                    Indoor
                    <FaCaretDown className="icon" />
                  </p>
                  {indoor ? (
                    <ul className="indoorlist">
                      <li>Chess</li>
                      <li>Carom</li>
                      <li>Pool</li>
                      <li>Ludo</li>
                      <li>Cards</li>
                      <li>Musical Chair</li>
                      <li>Table Tennis</li>
                      <li>Monopoly</li>
                    </ul>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="outdoor">
                  <p onClick={() => setOutdoor(!outdoor)}>
                    Outdoor
                    <FaCaretDown className="icon" />
                  </p>

                  {outdoor ? (
                    <ul className="outdoorlist">
                      <li>Cricket</li>
                      <li>Football</li>
                      <li>Basketball</li>
                      <li>Hockey</li>
                      <li>kho-kho</li>
                      <li>bowling</li>
                    </ul>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            ) : (
              <></>
            )}
          </li>
          <li className="list">
            <Link className="link" to="/blogs">
              Blogs
            </Link>
          </li>
          <li className="list">
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
        </div>
        <li className="logo">
          <img src={logo} alt="refresh" />
        </li>
        <div className="rightlist homebar">
          <li className="list">
            <Link className="link" to="/signin">
              Sign In
            </Link>
          </li>
          <li className="list">
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </li>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
