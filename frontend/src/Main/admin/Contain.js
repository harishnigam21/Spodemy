import { useState, useEffect } from "react";
export function Contain({ user }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProducturl = `${process.env.REACT_APP_BACKEND_HOST}/getproductdata`;
    const getProduct = async () => {
      const response = await fetch(getProducturl, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        const validProduct = (await response.json()).product;
        setProduct(validProduct);
      } else {
        console.log("No product has been added yet");
      }
    };
    getProduct();
  }, []);
  return (
    <div className="productDiv">
      {product ? (
        product.map((item) => (
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
        ))
      ) : (
        <h1>You are out of stock</h1>
      )}
    </div>
  );
}
export default Contain;
