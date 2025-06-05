import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import pullUser from "../../../usefullFunction/directuser";
const Contain = ({ user }) => {
  const params = useParams();
  pullUser(params.email);
  const [product, setProduct] = useState([]);
  const h1Ref = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
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
        const getProducturl = `${process.env.REACT_APP_BACKEND_HOST}/getproductdata`;
        const getProduct = async () => {
          const response = await fetch(getProducturl, {
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
              h1Ref.current.style.color = "red";
              h1Ref.current.textContent = getData.Message;
            }
          }
        };
        getProduct();
      } else {
        if (h1Ref.current) {
          h1Ref.current.style.color = "red";
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
  }, [user, location, navigate]);
  return (
    <div className="SellerproductDiv">
      <h1 style={{ color: "white" }} ref={h1Ref}>
        .
      </h1>
      {product.map((item) => (
        <div key={item.ProductId} className="productList">
          <h3>
            {item.ProductName} ({item.ProductBrand})
          </h3>
          <img src={item.ProductImg} alt="Your Description" />
          <section>
            <label>Quantity</label>
            <>:</>
            <p>{item.ProductQuantity}</p>
          </section>
          <section>
            <label>Price</label>
            <>:</>
            <p>{item.ProductPrice}/piece</p>
          </section>
        </div>
      ))}
    </div>
  );
};
export default Contain;
