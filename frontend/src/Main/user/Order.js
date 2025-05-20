/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/heading-has-content */
import { useState, useEffect, useRef } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Order() {
  const [orderItem, setOrderItem] = useState([]);
  const [showError, setShowError] = useState(false);
  const errorRef = useRef(null);
  useEffect(() => {
    const getOrderitemUrl = "https://spodemy.vercel.app/getorderitem";
    const getOrderItem = async () => {
      const response = await fetch(getOrderitemUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.Message);
        setOrderItem(data.orderItems);
      } else {
        const data = await response.json();
        console.log(data.Message);
        if (response.status === 401) {
          setShowError(true);
          if (errorRef.current) {
            errorRef.current.textContent = data.Message;
          }
          setTimeout(() => {
            window.location.replace("/signin");
          }, 5000);
        }
        if (response.status === 404) {
          setShowError(true);
          if (errorRef.current) {
            errorRef.current.textContent = data.Message;
          }
          setTimeout(() => {
            window.location.replace(
              window.location.href.replace("/yourorder", "")
            );
          }, 500000); //fix it at 5000 after testing:TODO
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
      arr[i] = data[i].img;
    }
    return arr;
  };
  return (
    <div className="order">
      <h1><Link to={window.location.href.replace("/yourorder", "")} className="link" style={{color:"white",fontSize:"larger",marginRight:"1rem"}}><FaHome/></Link>Your Order</h1>
      <div className="filter">
        <strong>FILTER{">>>"}</strong>
        <button type="button">Success</button>
        <button type="button">Failed</button>
        <button type="button">Canceled</button>
      </div>
      {showError ? (
        <h1
          ref={errorRef}
          className="errorMsg"
          style={{ textAlign: "center", color: "red", padding: "1rem" }}
        >Loading...</h1>
      ) : (
        orderItem.map((item) => (
          <div key={item.id} className="orderItem">
            <div className="orderBar">
              <div className="orderBarItem">
                <strong>ORDER PLACED</strong>
                <p>
                  {item.createdAt.slice(0, 10)} at{" "}
                  {item.createdAt.slice(12, 16)}
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
            </div>
            <div className="otherdetails">
              <div className="orderLS">
                <h1>Delivery Time</h1>
                <p>Delivery status that where it is</p>
                <div className="imgArray">
                  {
                  imageArray(item).map((img,index) => (
                    <img key={`${item.id}`+`${index}`} src={img} alt="refresh" />
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
