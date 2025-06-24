import { useRef, useState } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { FaHandPointRight, FaHandPointLeft, FaHome } from "react-icons/fa";
import pullUser from "../../../usefullFunction/directuser";
import removeSegment from "../../../usefullFunction/removeSegment";

const UpdateStock = () => {
  const location = useLocation();
  const stockitems = location.state.stock;
  const [items, setItems] = useState(stockitems);
  const [updatelogs, setUpdatelogs] = useState([]);
  const [liststart, setListstart] = useState(0);
  const [listend, setListend] = useState(9);
  const [pageno, setPageno] = useState(1);
  const sliceProducts = items.slice(liststart, listend);
  const navigate = useNavigate();
  const backUrl = removeSegment(window.location.pathname, 2);
  const h1Ref = useRef(null);
  const updateRef = useRef(null);
  const trRef = useRef(null);
  pullUser(useParams().email);
  const moveback = () => {
    if (liststart >= 10) {
      setListstart(liststart - 10);
      setListend(listend - 10);
      setPageno(pageno - 1);
    }
  };
  const moveforward = () => {
    if (listend < items.length) {
      setListstart(liststart + 10);
      setListend(listend + 10);
      setPageno(pageno + 1);
    }
  };
  const logData = (id, value, target) => {
    setUpdatelogs((prevUpdatelogs) => {
      const existingLogIndex = prevUpdatelogs.findIndex((log) => log.id === id);
      if (existingLogIndex === -1) {
        return [
          ...prevUpdatelogs,
          {
            id: id,
            data: [{ target: target, value: value }],
          },
        ];
      }

      return prevUpdatelogs.map((log, index) => {
        if (index === existingLogIndex) {
          const existingDataIndex = log.data.findIndex(
            (item) => item.target === target
          );

          if (existingDataIndex === -1) {
            return {
              ...log,
              data: [...log.data, { target: target, value: value }],
            };
          }

          return {
            ...log,
            data: log.data.map((item, dataIndex) => {
              if (dataIndex === existingDataIndex) {
                return { ...item, value: value };
              }
              return item;
            }),
          };
        }
        return log;
      });
    });
  };
  const onUpdate = async () => {
    try {
      if (updatelogs.length > 0) {
        updateRef.current.style.color = "blue";
        updateRef.current.disabled = true;
        updateRef.current.textContent = "updating...";
        const updatestockUrl = `${process.env.REACT_APP_BACKEND_HOST}/updatestock`;
        const response = await fetch(updatestockUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ updatelogs }),
          credentials: "include",
        });
        const data = await response.json();
        if (response.ok && h1Ref.current && updateRef.current) {
          updateRef.current.style.color = "green";
          updateRef.current.disabled = false;
          updateRef.current.textContent = "updated";
          h1Ref.current.style.color = "green";
          h1Ref.current.textContent = data.Message;
          setTimeout(() => {
            h1Ref.current.style.color = "yellow";
            h1Ref.current.textContent = "Returning back to shop...";
          }, 2000);
          setTimeout(() => {
            navigate(`/${backUrl}`, { replace: true });
          }, 5000);
        } else {
          if (h1Ref.current && updateRef.current) {
            updateRef.current.style.color = "red";
            updateRef.current.disabled = false;
            updateRef.current.textContent = "error!";
            h1Ref.current.style.color = "red";
            h1Ref.current.textContent = data.Message;
          }
        }
      } else {
        updateRef.current.style.color = "red";
        updateRef.current.textContent = "No updates!";
        setTimeout(() => {
          updateRef.current.style.color = "white";
          updateRef.current.textContent = "Update";
        }, 1000);
      }
    } catch (error) {
      if (h1Ref.current && updateRef.current) {
        updateRef.current.style.color = "red";
        updateRef.current.disabled = false;
        updateRef.current.textContent = "error!";
        h1Ref.current.style.color = "red";
        h1Ref.current.textContent = error.stack;
      }
    }
  };
  // updating product in current page, changes on DB will reflect on Submit, but this changes will reflect simultaneously and changes will occur at items, when page will load changes will destroyed
  const onlyCurrentPage = (id, value, target) => {
    setItems((preItem) => {
      return preItem.map((item) => {
        if (item.ProductId === id) {
          item[target] = value;
        }
        return item;
      });
    });
  };
  return (
    <div className="updateStock">
      <h1 ref={h1Ref}>
        <Link to={`/${backUrl}`}>
          <FaHome className="icon home" />
        </Link>
        Update Stock
      </h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Product name</th>
              <th>Product Brand</th>
              <th>Product Quantity</th>
              <th>Product Price</th>
              <th>Product Img</th>
            </tr>
          </thead>
          <tbody ref={trRef}>
            {sliceProducts.map((item, index) => (
              <tr key={item.ProductId}>
                <td>
                  <input
                    id={`pname/${index}`}
                    name={`pname/${index}`}
                    type="text"
                    defaultValue={item.ProductName}
                    onChange={(e) => {
                      logData(item.ProductId, e.target.value, "ProductName");
                      onlyCurrentPage(
                        item.ProductId,
                        e.target.value,
                        "ProductName"
                      );
                    }}
                  />
                </td>
                <td>
                  <input
                    id={`pbrand/${index}`}
                    name={`pbrand/${index}`}
                    type="text"
                    defaultValue={item.ProductBrand}
                    onChange={(e) => {
                      logData(item.ProductId, e.target.value, "ProductBrand");
                      onlyCurrentPage(
                        item.ProductId,
                        e.target.value,
                        "ProductBrand"
                      );
                    }}
                  />
                </td>
                <td>
                  <input
                    id={`pquantity/${index}`}
                    name={`pquantity/${index}`}
                    type="number"
                    defaultValue={item.ProductQuantity}
                    onChange={(e) => {
                      logData(
                        item.ProductId,
                        e.target.value,
                        "ProductQuantity"
                      );
                      onlyCurrentPage(
                        item.ProductId,
                        e.target.value,
                        "ProductQuantity"
                      );
                    }}
                  />
                </td>
                <td>
                  <input
                    id={`pprice/${index}`}
                    name={`pprice/${index}`}
                    type="number"
                    defaultValue={item.ProductPrice}
                    onChange={(e) => {
                      logData(item.ProductId, e.target.value, "ProductPrice");
                      onlyCurrentPage(
                        item.ProductId,
                        e.target.value,
                        "ProductPrice"
                      );
                    }}
                  />
                </td>
                <td>
                  {JSON.parse(item.ProductImg).map((img, index) => (
                    <img key={`${item.ProductId}/img/${index}`} src={img} alt="refresh"/>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <header className="Sheader">
          <p>
            Note : While Updating stock, please complete current page then
            switch to another page
          </p>
        </header>
        <div className="navigate">
          <FaHandPointLeft
            onClick={() => {
              if (trRef.current) {
                trRef.current.style.animation = "fadeTableOut 1s ease";
                moveback();
              }
            }}
            className="icon left"
          />
          <p>Page {pageno}</p>
          <FaHandPointRight
            onClick={() => {
              if (trRef.current) {
                trRef.current.style.animation = "fadeTableIn 1s ease forwards";
              }
              moveforward();
            }}
            className="icon right"
          />
        </div>
      </div>
      <button ref={updateRef} className="updateItem" onClick={onUpdate}>
        Update
      </button>
    </div>
  );
};
export default UpdateStock;
