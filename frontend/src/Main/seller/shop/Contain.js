import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
import pullUser from "../../../usefullFunction/directuser";
import { IoAddCircleOutline } from "react-icons/io5";
import UploadThings from "../../../uplodFile";
import { ImCross } from "react-icons/im";
import Loader from "../../../Loarder";

const Contain = ({ user }) => {
  const params = useParams();
  pullUser(params.email);
  const [product, setProduct] = useState([]);
  const [shopdetails, setShopdetails] = useState({});
  const [addItem, setAdditem] = useState(false);
  const [pname, setPname] = useState("");
  const [pbrand, setPbrand] = useState("");
  const [pquantity, setPquantity] = useState(0);
  const [pprice, setPprice] = useState(0);
  const h1Ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const uploadRef = useRef();
  const addstockRef = useRef();
  const errorRef = useRef(null);
  const productdataUrl = `${process.env.REACT_APP_BACKEND_HOST}/productdata`;

  useEffect(() => {
    const registeredStoreUrl = `${process.env.REACT_APP_BACKEND_HOST}/shopdetails`;
    const getRegisteredStore = async () => {
      const response = await fetch(registeredStoreUrl, {
        method: "GET",
        headers: { "content-type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        if (h1Ref.current) {
          setShopdetails(data.shopdetails);
          h1Ref.current.style.backgroundImage = "linear-gradient(blue)";
          h1Ref.current.textContent = `${data.shopdetails.shopName} stock`;
        }
        const getProduct = async () => {
          const response = await fetch(productdataUrl, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          });
          const getData = await response.json();
          if (response.ok) {
            const validProduct = getData.product;
            setProduct(validProduct);
          } else {
            console.log(getData.Message);
            if (h1Ref.current) {
              h1Ref.current.style.backgroundImage = "linear-gradient(red)";
              h1Ref.current.textContent = getData.Message;
            }
          }
        };
        getProduct();
      } else {
        if (h1Ref.current) {
          h1Ref.current.style.backgroundImage = "linear-gradient(red)";
          h1Ref.current.textContent = data.Message;
          if (response.status === 404) {
            setTimeout(() => {
              navigate(location.pathname + "/registershop", {
                state: { user: user },
              });
            }, 5000);
          }
        }
      }
    };
    getRegisteredStore();
  }, [user, location, navigate, productdataUrl]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      shopdetails &&
      shopdetails.shopName &&
      shopdetails.email &&
      pname.length > 0 &&
      pbrand.length > 0 &&
      pquantity > 0 &&
      pprice > 0
    ) {
      const uploadUrls = await uploadRef.current?.handleSubmit();
      if (uploadUrls.length > 0 && uploadUrls.length <= 5 && errorRef.current) {
        errorRef.current.style.color = "green";
        errorRef.current.textContent = "Submitting...";
        const response = await fetch(productdataUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            shopname: shopdetails.shopName,
            email: shopdetails.email,
            pname,
            pbrand,
            pquantity,
            pprice,
            uploadUrls,
          }),
        });
        const data = await response.json();
        if (response.ok) {
          errorRef.current.style.color = "green";
          errorRef.current.textContent = data.Message;
        } else {
          errorRef.current.style.color = "red";
          errorRef.current.textContent = data.Message;
        }
      } else {
        if (errorRef.current) {
          errorRef.current.style.color = "red";
          if (uploadUrls === undefined || uploadUrls === null) {
            errorRef.current.textContent = "Number of Images limits exceed's";
          } else {
            errorRef.current.textContent = "Please upload image";
          }
        }
      }
    } else {
      if (errorRef.current) {
        errorRef.current.style.color = "red";
        if (pname.length === 0) {
          errorRef.current.textContent = "Please enter product name";
        } else if (pbrand.length === 0) {
          errorRef.current.textContent = "Please enter product brand";
        } else if (pquantity === 0) {
          errorRef.current.textContent = "Please enter product quantity";
        } else if (pprice === 0) {
          errorRef.current.textContent = "Please enter product price";
        } else if (!shopdetails) {
          errorRef.current.textContent = "Unable to fetch your shop details";
        }
      }
    }
  };
  return (
    <div className="SellerproductDiv">
      <h1 style={{ color: "white" }} ref={h1Ref}>
        LOADING <Loader />
      </h1>
      <div className="SproductList">
        {product.map((item) => (
          <div key={item.ProductId} className="Sproduct">
            <h3>
              {item.ProductName} ({item.ProductBrand})
            </h3>
            <div className="Simage">
              <div className="images">
                <img
                  src={
                    JSON.parse(item.ProductImg)[
                      JSON.parse(item.ProductImg).length - 1
                    ]
                  }
                  alt="refresh"
                />
              </div>
            </div>
            <div className="info">
              <section>
                <label>Quantity</label>
                <strong>:</strong>
                <p>{item.ProductQuantity}</p>
              </section>
              <section>
                <label>Price</label>
                <strong>:</strong>
                <p>{item.ProductPrice}/piece</p>
              </section>
            </div>
          </div>
        ))}
      </div>
      <div className="stockbtn">
        <div className="additemdiv">
          <IoAddCircleOutline
            onClick={() => setAdditem(true)}
            className="icon additem"
          />
          Add Item
        </div>
        <Link
          to={`${shopdetails.shopName}/updatestock`}
          state={{ stock: product }}
        >
          <button>Update stock</button>
        </Link>
      </div>
      {addItem ? (
        <div ref={addstockRef} className="addstock">
          <form>
            <div className="form">
              <ImCross
                className="icon cross"
                onClick={() => {
                  if (addstockRef.current) {
                    addstockRef.current.style.animation =
                      "fadeItemsOut 1s ease-in-out forwards";
                    setTimeout(() => {
                      setAdditem(false);
                    }, 1000);
                  }
                }}
              />
              <div className="details">
                <label htmlFor="pname">Product Name</label>
                <strong>:</strong>
                <input
                  id="pname"
                  placeholder="Enter product name"
                  onChange={(e) => setPname(e.target.value)}
                  autoFocus
                  autoComplete="on"
                  required
                />

                <label htmlFor="pbrand">Product Brand</label>
                <strong>:</strong>
                <input
                  id="pbrand"
                  placeholder="Enter product Brand"
                  onChange={(e) => setPbrand(e.target.value)}
                  autoComplete="on"
                  required
                />

                <label htmlFor="pqunatity">Product Quantity</label>
                <strong>:</strong>
                <input
                  type="number"
                  min={1}
                  id="pqunatity"
                  placeholder="Enter product Qunatity"
                  onChange={(e) => setPquantity(e.target.value)}
                  autoComplete="on"
                  required
                />

                <label htmlFor="pprice">Product Price</label>
                <strong>:</strong>
                <input
                  type="number"
                  min={1}
                  id="pprice"
                  placeholder="Enter product Price"
                  onChange={(e) => setPprice(e.target.value)}
                  autoComplete="on"
                  required
                />

                <label htmlFor="pimage">
                  Product Images <p></p>(max 5)
                </label>
                <strong>:</strong>
                <UploadThings ref={uploadRef} />
              </div>
              <h4 ref={errorRef}>All Field are mandatory... </h4>
              <button onClick={(e) => onSubmit(e)} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Contain;
