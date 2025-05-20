import { useState, useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export function Contain() {
  const [product, setProduct] = useState([]);
  const [iteminatc, setIteminatc] = useState(0);
  const [itemidsinatc, setItemidsinatc] = useState([]);
  const [whishlist, setWhishlist] = useState([]);
  const [whishlistState, setWhishlistState] = useState([]);
  const [searchbarvalue, setSearchbarvalue] = useState("");
  const [buttonStates, setButtonStates] = useState({});
  const currentLocation = window.location.href;
  const updateforatc = `${currentLocation}/yourcart`;

  useEffect(() => {
    const getcartdataurl = "https://spodemy.vercel.app/getcartdata";
    const getProducturl = "https://spodemy.vercel.app/getallproductdata";

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
        } else {
          console.log("There is nothing to show you currently");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    getcartdata();
    getProduct();
  }, []);

  useEffect(() => {
    // Initialize button states based on itemidsinatc when products load
    const initialButtonStates = {};
    product.forEach((item) => {
      initialButtonStates[item.ProductId] = itemidsinatc.includes(
        item.ProductId
      )
        ? { text: "Added", disabled: true }
        : { text: "Add to cart", disabled: false };
    });
    setButtonStates(initialButtonStates);
  }, [product, itemidsinatc]); // Re-run when product or cart items change

  useEffect(() => {
    const postcartdataurl = "https://spodemy.vercel.app/postcartdata";
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
  }, [iteminatc, itemidsinatc]);

  useEffect(() => {
    setWhishlist(
      whishlistState
        .filter((item) => item.status === true)
        .map((item) => item.id)
    );
    const lenght = whishlistState.length;
    for (let i = 0; i < lenght; i++) {
      const id = `#wish${whishlistState[i].id}`;
      if (whishlistState[i].status === true) {
        document.querySelector(id).style.color = "red";
      } else {
        document.querySelector(id).style.color = "white";
      }
    }
  }, [whishlistState]);

  const handleAddToCart = (productId) => {
    setIteminatc((prevCount) => prevCount + 1);
    setItemidsinatc((prevIds) => [...prevIds, productId]);
    setButtonStates((prevStates) => ({
      ...prevStates,
      [productId]: { text: "Added", disabled: true },
    }));
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
  console.log(whishlistState);
  console.log(whishlist);
  return (
    <div className="Contain">
      <div className="searchboxdiv">
        <FaSearch
          style={{ color: "white", fontSize: "2rem", marginRight: "0.5rem" }}
        />
        <input
          type="search"
          name="searchbox"
          id="searchbox"
          placeholder="Search for your Contain here..."
          onChange={(e) => setSearchbarvalue(e.target.value)}
        />
        <IoSend
          style={{ color: "white", fontSize: "2rem", marginLeft: "0.5rem" }}
        />
      </div>
      {
        product.length!==0
        ?
        <div className="productDiv">
        {product && !searchbarvalue ? (
          product.map((item) => (
            <div key={item.ProductId} className="productList">
              <h3>
                {item.ProductName} ({item.ProductBrand})
              </h3>
              <img src={item.ProductImg} alt="refresh" />
              <section>
                <label>Quantity</label>
                <>:</>
                <p>{item.ProductQuantity}</p>
              </section>
              <section>
                <label>Price</label>
                <>:</>
                <p>₹ {item.ProductPrice}/piece</p>
              </section>
              <section>
                <label>Shop</label>
                <>:</>
                <p>{item.ShopName}</p>
              </section>
              <div className="atc&bn">
                <button
                  type="button"
                  onClick={() => handleAddToCart(item.ProductId)}
                  data-product-id={item.ProductId}
                  disabled={buttonStates[item.ProductId]?.disabled || false}
                >
                  {buttonStates[item.ProductId]?.text || "Add to cart"}
                </button>
                <button type="button">Buy Now</button>
                <FaHeart
                  className="wish"
                  id={`wish${item.ProductId}`}
                  onClick={() => onClickWL(item.ProductId)}
                />
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
                <h3>
                  {item.ProductName} ({item.ProductBrand})
                </h3>
                <img src={item.ProductImg} alt="refresh" />
                <section>
                  <label>Quantity</label>
                  <>:</>
                  <p>{item.ProductQuantity}</p>
                </section>
                <section>
                  <label>Price</label>
                  <>:</>
                  <p>₹ {item.ProductPrice}/piece</p>
                </section>
                <section>
                  <label>Shop</label>
                  <>:</>
                  <p>{item.ShopName}</p>
                </section>
                <div className="atc&bn">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(item.ProductId)}
                    data-product-id={item.ProductId}
                    disabled={buttonStates[item.ProductId]?.disabled || false}
                  >
                    {buttonStates[item.ProductId]?.text || "Add to cart"}
                  </button>
                  <button type="button">Buy Now</button>
                </div>
              </div>
            ))
        ) : (
          <h1>Sorry, We are currently out of stock</h1>
        )}
      </div>
        :<h1 style={{color:"red",textAlign:"center"}}>Their is no product to show you currently</h1>
      }
      
      <button className="atcpop" type="button">
        <Link to={updateforatc} style={{ textDecoration: "none" }}>
          <FaCartArrowDown style={{ fontSize: "2rem", color: "white" }} />
          {iteminatc}
        </Link>
      </button>
    </div>
  );
}

export default Contain;
