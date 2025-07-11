/* eslint-disable no-useless-concat */
import { useState, useEffect, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import pullUser from "../../../usefullFunction/directuser";
import Loader from "../../../Loarder";

export default function Order() {
  const [orderItem, setOrderItem] = useState([]);
  const [showError, setShowError] = useState(true);
  const [showOrderDetails, setShowOrderDetails] = useState([]);
  const [showfilter, setShowfilter] = useState(false);

  //pull User, who are not signed in
  const params = useParams();
  const emailenc = params.email;
  pullUser(emailenc);

  const errorRef = useRef(null);
  useEffect(() => {
    const getOrderitemUrl = `${process.env.REACT_APP_BACKEND_HOST}/getorderitem`;
    const getOrderItem = async () => {
      const response = await fetch(getOrderitemUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        setShowError(false);
        const data = await response.json();
        console.log(data.Message);
        setOrderItem(data.orderItems);
        for (let i = 0; i < data.orderItems.length; i++) {
          const newObj = {
            id: data.orderItems[i].id,
            status: false,
          };
          setShowOrderDetails((preItem) => [...preItem, newObj]);
        }
      } else {
        setShowError(true);
        const data = await response.json();
        console.log(data.Message);
        if (errorRef.current) {
          errorRef.current.style.backgroundImage = "linear-gradient(red)";
          errorRef.current.textContent = data.Message;
        }
        if (response.status === 401) {
          setTimeout(() => {
            window.location.replace("/signin");
          }, 5000);
        }
        if (response.status === 404) {
          setTimeout(() => {
            window.location.replace(
              window.location.href.replace("/yourorder", "")
            );
          }, 5000);
        }
      }
    };
    getOrderItem();
  }, []);
  const calculateTotal = (item) => {
    const data = JSON.parse(item.usrcartobj);
    let result = 0;
    for (let i = 0; i < data.length; i++) {
      result += data[i].price * data[i].quantity;
    }
    return result;
  };
  const calculateTotalQuan = (item) => {
    const data = JSON.parse(item.usrcartobj);
    let result = 0;
    for (let i = 0; i < data.length; i++) {
      result += data[i].quantity;
    }
    return result;
  };
  const imageArray = (item) => {
    const data = JSON.parse(item.usrcartobj);
    const length = data.length;
    const arr = new Array(length);
    for (let i = 0; i < data.length; i++) {
      arr[i] = JSON.parse(data[i].img)[0];
    }
    return arr;
  };
  return (
    <div className="order">
      <h1>
        <Link
          to={window.location.href.replace("/yourorder", "")}
          className="link"
          style={{ color: "white", fontSize: "larger", marginRight: "1rem" }}
        >
          <FaHome className="icon" />
        </Link>
        Your Order
      </h1>
      <div className="filter">
        <strong
          onClick={() => setShowfilter(!showfilter)}
          style={{ cursor: "pointer" }}
        >
          FILTER
        </strong>
        {showfilter ? (
          <>{">>>"}</>
        ) : (
          <FaChevronDown
            className="icon"
            style={{ color: "blue", transform: "rotate(270deg)" }}
            onClick={() => setShowfilter(!showfilter)}
          />
        )}
        {showfilter ? (
          <>
            <button type="button">Success</button>
            <button type="button">Failed</button>
            <button type="button">Canceled</button>
          </>
        ) : (
          <></>
        )}
      </div>
      {showError ? (
        <div id="loading">
          <h1 ref={errorRef}>
            LOADING <Loader />
          </h1>
        </div>
      ) : (
        orderItem.map((item) => (
          <div key={item.id} className="orderItem">
            <div className="orderBar">
              <strong
                className="orderBarItem"
                onClick={() => {
                  setShowOrderDetails((preitem) =>
                    preitem.map((Initem) => {
                      if (Initem.id === item.id) {
                        return { ...Initem, status: !Initem.status };
                      }
                      return Initem;
                    })
                  );
                }}
                style={{ cursor: "pointer" }}
              >
                Order Details
                {showOrderDetails.find((Initem) => Initem.id === item.id)
                  .status ? (
                  <strong style={{ color: "red" }}>{">>>"}</strong>
                ) : (
                  <></>
                )}
              </strong>
              {showOrderDetails.find((Initem) => Initem.id === item.id)
                .status ? (
                <>
                  <div className="orderBarItem">
                    <strong>ORDER PLACED</strong>
                    <p>
                      {item.createdAt.slice(0, 10)} at{" "}
                      {item.createdAt.slice(11, 16)}
                    </p>
                  </div>
                  <div className="orderBarItem">
                    <strong>TOTAL</strong>
                    <p>₹{calculateTotal(item)}</p>
                  </div>
                  <div className="orderBarItem">
                    <strong>ITEM's</strong>
                    <p>{calculateTotalQuan(item)}</p>
                  </div>
                  <div className="orderBarItem">
                    <strong>SHIP TO</strong>
                    <p>from DB</p>
                  </div>
                  <div className="orderBarItem">
                    <strong>ORDER ID</strong>
                    <p>{item.transactionid}</p>
                  </div>
                </>
              ) : (
                <FaChevronDown
                  className="icon"
                  style={{ color: "blue" }}
                  onClick={() => {
                    setShowOrderDetails((preitem) =>
                      preitem.map((Initem) => {
                        if (Initem.id === item.id) {
                          return { ...Initem, status: !Initem.status };
                        }
                        return Initem;
                      })
                    );
                  }}
                />
              )}
            </div>
            <div className="otherdetails">
              <div className="orderLS">
                <h1>Delivery Time</h1>
                <p>Delivery status that where it is</p>
                <div className="imgArray">
                  {imageArray(item).map((img, index) => (
                    <>
                      <img
                        key={`${item.id}` + `${index}`}
                        src={img}
                        alt="refresh"
                      />
                    </>
                  ))}
                </div>
                {/* list product here */}
              </div>
              <div className="orderRS">
                <button type="button">Track Package</button>
                <button type="button">Seller Feedback</button>
                <button type="button">Delivery Feedback</button>
                <button type="button">Product Feedback</button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
