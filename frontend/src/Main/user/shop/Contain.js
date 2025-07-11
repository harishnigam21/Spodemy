import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import pullUser from "../../../usefullFunction/directuser";
import {
  FaShoppingCart,
  FaCartArrowDown,
  FaArrowLeft,
  FaHeart,
} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
import Loader from "../../../Loarder";
import removeSegment from "../../../usefullFunction/removeSegment";
export default function Contain() {
  const [product, setProduct] = useState([]);
  const [iteminatc, setIteminatc] = useState(0);
  const [itemidsinatc, setItemidsinatc] = useState([]);
  const [whishlistState, setWhishlistState] = useState([]);
  const [searchbarvalue, setSearchbarvalue] = useState("");
  const [gamelist, setGamelist] = useState([]);
  const currentLocation = window.location.href;
  const updateforatc = `${currentLocation}/yourcart`;
  const errorRef = useRef(null);
  const wishlisturl = `${process.env.REACT_APP_BACKEND_HOST}/wishlist`;
  const getcartdataurl = `${process.env.REACT_APP_BACKEND_HOST}/getcartdata`;
  const getProducturl = `${process.env.REACT_APP_BACKEND_HOST}/getallproductdata`;

  const backUrl = removeSegment(window.location.pathname, 1);
  //pull User, who are not signed in
  const params = useParams();
  const emailenc = params.email;
  pullUser(emailenc);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(getProducturl, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (response.ok) {
          const validProduct = (await response.json()).product;
          setProduct(validProduct);
          if (validProduct.length > 0) {
            let array = [];
            for (let i = 0; i < validProduct.length; i++) {
              let url = JSON.parse(validProduct[i].ProductImg)[
                JSON.parse(validProduct[i].ProductImg).length - 1
              ];
              array[i] = {
                name: validProduct[i].Game,
                image: url,
              };
            }
            const uniqueObjectsByName = array.filter(
              (obj, index, self) =>
                index === self.findIndex((t) => t.name === obj.name)
            );
            setGamelist(uniqueObjectsByName);
          }
        } else {
          console.log("There is nothing to show you currently");
          if (errorRef.current) {
            errorRef.current.style.backgroundImage = "linear-gradient(red)";
            errorRef.current.textContent =
              "Sorry!, There is not any product to list currently";
          }
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };
    const getcartdata = async () => {
      try {
        const response = await fetch(getcartdataurl, {
          method: "GET",
          headers: { "content-type": "application/json" },
          credentials: "include",
        });
        if (response.ok) {
          const cartdata = (await response.json()).cartdata;
          setIteminatc(parseInt(cartdata.totalItem));
          const itemsIdString = cartdata.itemsid;
          const itemsIdArrayString = itemsIdString.slice(1, -1).split(",");
          const itemsIdArrayInt = itemsIdArrayString
            .map((str) => parseInt(str.trim()))
            .filter((id) => !isNaN(id));
          setItemidsinatc(itemsIdArrayInt);
        } else {
          console.log("unable to get cartdata");
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    const getWL = async () => {
      const response = await fetch(wishlisturl, {
        method: "GET",
        headers: { "content-type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        setWhishlistState(JSON.parse(data.obj));
        console.log(data.Message);
      } else {
        console.log((await response.json()).Message);
      }
    };
    getProduct();
    getcartdata();
    getWL();
  }, []);

  useEffect(() => {
    const postcartdataurl = `${process.env.REACT_APP_BACKEND_HOST}/postcartdata`;
    const postcartdata = async () => {
      try {
        const response = await fetch(postcartdataurl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ iteminatc, itemidsinatc }),
          credentials: "include",
        });
        console.log((await response.json()).Message);
      } catch (error) {
        console.error("Error posting cart data:", error);
      }
    };
    if (iteminatc > 0) {
      // Only post if there are items in the cart
      postcartdata();
    }
    for (let i = 0; i < itemidsinatc.length; i++) {
      const id = `atc${itemidsinatc[i]}`;
      const element = document.getElementById(id);
      if (element) {
        const icon = element.getElementsByClassName("icon");
        element.disabled = true;
        if (icon) {
          icon[1].style.display = "flex";
        }
      }
    }
  }, [iteminatc, itemidsinatc, product]);

  useEffect(() => {
    const postWL = async () => {
      if (whishlistState.length > 0) {
        const wlResponse = await fetch(wishlisturl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ whishlistState }),
          credentials: "include",
        });
        if (wlResponse.ok) {
          const length = whishlistState.length;
          if (length > 0) {
            for (let i = 0; i < length; i++) {
              const id = `#wish${whishlistState[i].id}`;
              const element = document.querySelector(id);
              if (element) {
                if (whishlistState[i].status === true) {
                  element.style.color = "red";
                } else {
                  element.style.color = "white";
                }
              } else {
                // Optional: Log a warning if the element isn't found, for debugging
                console.warn(`Element with ID ${id} not found in DOM.`);
              }
            }
          } else {
            console.log("Empty wishList");
          }
        }
        const message = (await wlResponse.json()).Message;
        console.log(message);
      }
    };
    postWL();
  }, [whishlistState]);

  const handleAddToCart = (productId) => {
    setIteminatc((prevCount) => prevCount + 1);
    setItemidsinatc((prevIds) => [...prevIds, productId]);
  };

  const onClickWL = (id) => {
    const newObj = {
      id: id,
      status: true,
    };
    const thatItem = whishlistState.find((item) => item.id === id);
    if (!thatItem || thatItem === undefined) {
      setWhishlistState((item) => [...item, newObj]);
    } else {
      setWhishlistState((preitem) =>
        preitem.map((item) => {
          if (item.id === id) {
            return { ...item, status: !item.status };
          }
          return item;
        })
      );
    }
  };

  return (
    <div className="Contain">
      <div className="searchboxdiv">
        <Link to={`/${backUrl}`}>
          <FaArrowLeft className="icon prebtn" style={{ color: "red" }} />
        </Link>
        <input
          type="search"
          name="searchbox"
          id="searchbox"
          placeholder="Search for your Contain here..."
          onChange={(e) => setSearchbarvalue(e.target.value)}
        />
      </div>
      <div className="category">
        <p>Shop by Category</p>
        <div className="gameList">
          {gamelist.length > 0 ? (
            gamelist.map((game) => {
              return (
                <div key={game.name} className="game">
                  <strong>{game.name}</strong>
                  <img src={game.image} alt="refresh" />
                  <div>
                    <div className="button">
                      <button type="button">Go there</button>
                      <p>.</p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
      {product.length !== 0 ? (
        <div className="productDiv">
          {product && !searchbarvalue ? (
            product.map((item) => (
              <div key={item.ProductId} className="productList">
                <strong>
                  {item.ProductName} ({item.ProductBrand})
                </strong>
                <img
                  src={
                    JSON.parse(item.ProductImg)[
                      JSON.parse(item.ProductImg).length - 1
                    ]
                  }
                  alt="refresh"
                />
                {/* using it when i click item to see */}
                <div className="atcbn">
                  <button type="button" id={`atc${item.ProductId}`}>
                    <FaShoppingCart
                      title="Add to cart"
                      className="atc icon"
                      onClick={() => handleAddToCart(item.ProductId)}
                    />
                    <FaCircleCheck className="tick icon" />
                  </button>
                  <button type="button" id={`bn${item.ProductId}`}>
                    <MdElectricBolt title="Buy Now" className="bn icon" />
                  </button>
                  <button type="button">
                    <FaHeart
                      title="Wishlist"
                      className="wish icon"
                      id={`wish${item.ProductId}`}
                      onClick={() => onClickWL(item.ProductId)}
                    />
                  </button>
                </div>
              </div>
            ))
          ) : searchbarvalue ? (
            product
              .filter(
                (item) =>
                  item.ProductName.toLowerCase().includes(
                    searchbarvalue.toLowerCase()
                  ) ||
                  item.ProductBrand.toLowerCase().includes(
                    searchbarvalue.toLowerCase()
                  ) ||
                  item.ShopName.toLowerCase().includes(
                    searchbarvalue.toLowerCase()
                  )
              )
              .map((item) => (
                <div key={item.ProductId} className="productList">
                  <strong>
                    {item.ProductName} ({item.ProductBrand})
                  </strong>
                  <img
                    src={
                      JSON.parse(item.ProductImg)[
                        JSON.parse(item.ProductImg).length - 1
                      ]
                    }
                    alt="refresh"
                  />
                  {/* using it when i click item to see */}
                  <div className="atcbn">
                    <FaShoppingCart
                      title="Add to cart"
                      className="atc icon"
                      onClick={() => handleAddToCart(item.ProductId)}
                    />
                    <MdElectricBolt title="Buy Now" className="bn icon" />
                    <FaHeart
                      title="Wishlist"
                      className="wish icon"
                      id={`wish${item.ProductId}`}
                      onClick={() => onClickWL(item.ProductId)}
                    />
                  </div>
                </div>
              ))
          ) : (
            <h1>Sorry, We are currently out of stock</h1>
          )}
        </div>
      ) : (
        <div id="loading">
          <h1 ref={errorRef}>
            LOADING <Loader />
          </h1>
        </div>
      )}

      <button className="atcpop" type="button">
        <Link to={updateforatc} style={{ textDecoration: "none" }}>
          <FaCartArrowDown
            className="icon"
            style={{ fontSize: "2rem", color: "white" }}
          />
          {iteminatc}
        </Link>
      </button>
    </div>
  );
}
