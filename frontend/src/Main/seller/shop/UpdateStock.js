import { useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa";
import pullUser from "../../../usefullFunction/directuser";
import removeSegment from "../../../usefullFunction/removeSegment";

const UpdateStock = () => {
  const location = useLocation();
  const items = location.state.stock;
  const [updatelogs, setUpdatelogs] = useState([]);
  const [liststart, setListstart] = useState(0);
  const [listend, setListend] = useState(9);
  const [pageno, setPageno] = useState(1);
  const sliceProducts = items.slice(liststart, listend);
  const navigate = useNavigate();
  const backUrl = removeSegment(window.location.pathname, 2);
  const h1Ref = useRef(null);
  const updateRef = useRef(null);
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

  return (
    <div className="updateStock">
      <h1 ref={h1Ref}>Update Stock</h1>
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
          <tbody>
            {sliceProducts.map((item) => (
              <tr key={item.ProductId}>
                <td>
                  <input
                    type="text"
                    defaultValue={item.ProductName}
                    onChange={(e) =>
                      logData(item.ProductId, e.target.value, "ProductName")
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    defaultValue={item.ProductBrand}
                    onChange={(e) =>
                      logData(item.ProductId, e.target.value, "ProductBrand")
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    defaultValue={item.ProductQuantity}
                    onChange={(e) =>
                      logData(item.ProductId, e.target.value, "ProductQuantity")
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    defaultValue={item.ProductPrice}
                    onChange={(e) =>
                      logData(item.ProductId, e.target.value, "ProductPrice")
                    }
                  />
                </td>
                <td>
                  {JSON.parse(item.ProductImg).map((img, index) => (
                    <img key={`${item.ProductId}/img/${index}`} src={img} />
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="navigate">
          <FaHandPointLeft onClick={() => moveback()} className="icon left" />
          <p>Page {pageno}</p>
          <FaHandPointRight
            onClick={() => moveforward()}
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
