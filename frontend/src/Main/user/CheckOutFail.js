import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { GiConfirmed } from "react-icons/gi";
import pullUser from "../../usefullFunction/directuser";

export default function CheckOutFail() {
  const h1Ref = useRef();
  const params = useParams();
  const transactionid = params.transactionid;
  const transactionState = "FAILED";
  const [show, setShow] = useState(false);

  //pull User, who are not signed in
  const emailenc = params.email;
  pullUser(emailenc);

  function removeLastTwoParams(url, upto) {
    try {
      const urlObj = new URL(url);
      const pathSegments = urlObj.pathname.split("/").filter(Boolean);
      if (pathSegments.length >= upto) {
        pathSegments.splice(pathSegments.length - upto, upto);
        urlObj.pathname = "/" + pathSegments.join("/");
      }
      return urlObj.href;
    } catch (error) {
      console.error("Invalid URL:", error);
      return url; // Return original URL if it's invalid
    }
  }
  // const returnToCartURL = removeLastTwoParams(currentLocation,2);
  useEffect(() => {
    const verifyTransURL = "https://spodemy.vercel.app/verifytransaction";
    const currentLocation = window.location.href;

    const verifyTrans = async () => {
      const response = fetch(verifyTransURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transactionid, transactionState }),
        credentials: "include",
      });
      if ((await response).status === 200) {
        setShow(true);
        console.log("successfully Verified User");
        setTimeout(() => {
          window.location.replace(
            `${removeLastTwoParams(currentLocation, 3)}/yourorder`
          ); //change to order page, make order page assign it to index.js
        }, 5000);
      } else {
        setShow(false);
        if ((await response).status === 401) {
          if (h1Ref.current) {
            h1Ref.current.textContent =
              "You are not authorized person, Sending back you to Sign In page within 5s";
          }
          console.log("invalid User");
          setTimeout(() => {
            window.location.replace("/signin");
          }, 5000);
        } else if ((await response).status === 406) {
          if (h1Ref.current) {
            h1Ref.current.textContent =
              "Looks like you are trying to reach this page Directly, this is not authorized, Sending back to your State in 5s";
          }
          console.log("Sending back to your Cart");
          setTimeout(() => {
            window.location.replace(removeLastTwoParams(currentLocation, 2));
          }, 5000);
        }
      }
    };
    verifyTrans();
  }, [transactionid]);
  return (
    <div>
      {show ? (
        <div className="paymentSuccess">
          <div style={{ boxShadow: "0rem 0rem 2rem green inset" }}>
            <h1 style={{ color: "red" }}>
              Hello! Your Order is Cancelled.
              <GiConfirmed />
            </h1>
            <p>with Transaction ID : {transactionid}</p>
          </div>
          <strong style={{ color: "white", padding: "2rem" }}>
            Returning to Your Cart in 5s
          </strong>
        </div>
      ) : (
        <h1 className="h1error" ref={h1Ref}>
          Loading...
        </h1>
      )}
    </div>
  );
}
