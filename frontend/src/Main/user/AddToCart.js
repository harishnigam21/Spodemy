import { MdDelete } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

export default function AddToCart() {
  const [cartItem, setCartitem] = useState([]);
  const [quantities, setQuantities] = useState([]); // Initializing as an empty array
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [updcheckstatus, setUpdcheckstatus] = useState(false);
  const errorRef = useRef(null);
  const currentLocation = window.location.href;
  const newUrl = currentLocation.replace("/yourcart", "");

  useEffect(() => {
    const getcartitemurl = "https://spodemy.vercel.app/getcartitem";
    const getupdatedcarturl = "https://spodemy.vercel.app/getupdatedcart";

    const getItem = async () => {
      const response = await fetch(getcartitemurl, {
        method: "GET",
        headers: { "content-type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        const data = (await response.json()).cartitem;
        if (data) {
          setCartitem(data);
          // Initializing quantities state when cart items are fetched
          const getUpdatedCart = async () => {
            const response = await fetch(getupdatedcarturl, {
              method: "GET",
              headers: { "content-type": "application/json" },
              credentials: "include",
            });
            if (response.ok) {
              const data1 = (await response.json()).updatedcart;
              const updata = JSON.parse(data1);
              if (updata.length >= 1 && updata.length >= data.length) {
                setQuantities(updata);
                setUpdcheckstatus(true);
              } else {
                const initialQuantities = data.map((obj) => ({
                  id: obj.ProductId,
                  name: obj.ProductName,
                  quantity: 1, // Default quantity to 1
                  img: obj.ProductImg,
                  price: obj.ProductPrice, // Default price for default quantity
                  seller: obj.ShopName,
                }));
                setQuantities(initialQuantities);
              }
            } else {
              const initialQuantities = data.map((obj) => ({
                id: obj.ProductId,
                name: obj.ProductName,
                quantity: 1, // Default quantity to 1
                img: obj.ProductImg,
                price: obj.ProductPrice, // Default price for default quantity
                seller: obj.ShopName,
              }));
              setQuantities(initialQuantities);
            }
          };
          getUpdatedCart();
        }
      } else if (response.status === 401) {
        window.location.replace("/signin");
      }
    };
    getItem();
  }, []);

  //total price and total items in cart
  useEffect(() => {
    setUpdcheckstatus(true);
    const totalprice = () => {
      let result = 0;
      for (let i = 0; i < quantities.length; i++) {
        result += quantities[i].price;
      }
      setTotalPrice(result);
    };
    totalprice();

    const totalitem = () => {
      let result = 0;
      for (let i = 0; i < quantities.length; i++) {
        result += quantities[i].quantity;
      }
      setTotalItem(result);
      if (totalItem === 0) {
        if (errorRef.current) {
          errorRef.current.textContent = "Looks Like your Cart is empty";
        }
      }
    };
    totalitem();
  }, [quantities]);

  const sendUpdatedcart = async () => {
    const sendurl = "https://spodemy.vercel.app/sendupdatedcart";
    const response = await fetch(sendurl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ quantities }),
    });
    if (response.ok) {
      setUpdcheckstatus(false);
    } else {
      console.log("Sorry, currently we are unable to proceed with checkout"); //display this to user
    }
  };

  const handleDeleteCart = async (productId) => {
    const deleteurl = "https://spodemy.vercel.app/deletecartitem";
    const response = await fetch(deleteurl, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ productId }),
    });
    try {
      if (response.ok) {
        window.location.reload();
        setCartitem(cartItem.filter((item) => item.productId !== productId));
        setQuantities(
          quantities.filter((item) => item.productId !== productId)
        );
      } else {
        console.log(
          `There is issue at DB side with response : ${response.Message}`
        );
      }
    } catch (error) {
      console.log(
        `Sorry, unable to remove item due to this error\n : ${error}`
      );
    }
  };

  const makePayment = async () => {
    const getpublishKeyurl = "https://spodemy.vercel.app/publishkey";
    const getpublishKeyResponse = await fetch(getpublishKeyurl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (getpublishKeyResponse.ok) {
      const key = (await getpublishKeyResponse.json()).pk;
      const stripe = await loadStripe(key);

      const checkout = "https://spodemy.vercel.app/checkout";
      const response = await fetch(checkout, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantities }),
        credentials: "include",
      });
      if (response.ok) {
        const session = await response.json();
        const result = stripe.redirectToCheckout({ sessionId: session.id });
        if (result.error) {
          console.log(result.error);
        }
      } else {
        console.log((await response.json()).Message);
      }
    } else {
      console.log(getpublishKeyResponse.json().Message);
    }
  };
  return (
    <div className="maincartdiv">
      <h1>
        <Link to={newUrl}>
          <FaHome style={{ color: "white", marginRight: "1rem" }} />
        </Link>
        Your Cart
      </h1>
      {totalItem > 0 ? (
        cartItem.map((item) => {
          // Find the corresponding quantity object for the current item
          const itemQuantityObj = quantities.find(
            (qObj) => qObj.id === item.ProductId
          );
          const currentQuantity = itemQuantityObj
            ? itemQuantityObj.quantity
            : 1; // Default to 1 if not found

          return (
            <div key={item.ProductId} className="cartitem">
              <img src={item.ProductImg} alt="refresh" />
              <div className="itemdetails">
                <h2>
                  {item.ProductName} [{item.ProductBrand}]
                </h2>
                <p>
                  Description : Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Quae sint minima ex neque sunt reiciendis
                  assumenda iste? Voluptatibus animi velit ipsa, modi rem quidem
                  ratione, ex, nesciunt accusamus facere voluptate!
                </p>
                <div className="quantity">
                  <label htmlFor={`quanity-${item.ProductId}`}>
                    Quantity :{" "}
                  </label>
                  <input
                    type="number"
                    name={`quanity-${item.ProductId}`}
                    id={`quanity-${item.ProductId}`}
                    value={currentQuantity} // Use the found quantity
                    onChange={(e) => {
                      const newValue = e.target.value;
                      if (!isNaN(newValue) && newValue >= 1) {
                        setQuantities((prevQuantities) =>
                          prevQuantities.map((qObj) =>
                            qObj.id === item.ProductId
                              ? {
                                  ...qObj,
                                  quantity: parseInt(newValue, 10),
                                  price:
                                    parseInt(newValue, 10) * item.ProductPrice,
                                }
                              : qObj
                          )
                        );
                      } else {
                        // Handle invalid input (e.g., reset to 1)
                        setQuantities((prevQuantities) =>
                          prevQuantities.map((qObj) =>
                            qObj.id === item.ProductId
                              ? { ...qObj, quantity: 1 }
                              : qObj
                          )
                        );
                      }
                    }}
                    min="1"
                  />
                </div>
                <div className="price">
                  <label htmlFor={`price-${item.ProductId}`}>Price : </label>
                  <p
                    name={`price-${item.ProductId}`}
                    id={`price-${item.ProductId}`}
                  >
                    ₹ {item.ProductPrice * currentQuantity}
                    {/* Use the found quantity */}
                  </p>
                </div>
                <div>
                  <label htmlFor="buyiedfrom">Buying From : </label>
                  <p name="buyiedfrom" id="buyiedfrom">
                    {item.ShopName}
                  </p>
                </div>
              </div>
              <div className="removeUpdate">
                <MdDelete
                  style={{ color: "red", fontSize: "2rem" }}
                  onClick={() => handleDeleteCart(item.ProductId)}
                />
                Remove
                <br />
              </div>
            </div>
          );
        })
      ) : (
        <div className="cartdberror">
          <h1 ref={errorRef}>
            Sorry, unable to fetch your cart item at this time, Please try later
            after some time
          </h1>
        </div>
      )}
      <div className="continueShopping">
        <Link to={newUrl}>
          <IoAddCircleOutline className="addcircle" />
        </Link>
        Add Item
      </div>
      <div className="total">
        <button
          disabled={!updcheckstatus}
          className="update"
          type="button"
          onClick={sendUpdatedcart}
        >
          Update Cart
        </button>
        <strong htmlFor="totalprice">Total</strong>
        <strong>=</strong>
        <p id="pricevalue">₹ {totalPrice}</p>
        <p
          style={{ color: "greenyellow", marginLeft: "0.8rem" }}
          id="totalitem"
        >
          ({totalItem} items)
        </p>
        <button
          disabled={updcheckstatus}
          className="checkout"
          type="button"
          onClick={makePayment}
        >
          Proceed to Buy
        </button>
      </div>
    </div>
  );
}
