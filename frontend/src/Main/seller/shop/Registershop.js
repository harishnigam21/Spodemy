import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import UploadThings from "../../../uplodFile";
import pullUser from "../../../usefullFunction/directuser";
import removeSegment from "../../../usefullFunction/removeSegment";
const Registershop = () => {
  const params = useParams();
  pullUser(params.email);
  const backUrl = removeSegment(window.location.pathname, 1);
  const [shopname, setShopname] = useState("");
  const [shopaddress, setshopAddress] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state.user;
  const email = user.email;
  const uploadRef = useRef();
  const errorRef = useRef(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (shopname.length > 0 && shopaddress.length > 0) {
      const uploadUrls = await uploadRef.current?.handleSubmit();
      if (uploadUrls && uploadUrls.length > 0) {
        errorRef.current.style.color = "green";
        errorRef.current.textContent = "Submitting...";
        const sendShopDetailsUrl = `${process.env.REACT_APP_BACKEND_HOST}/shopdetails`;
        const response = await fetch(sendShopDetailsUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, shopname, shopaddress, uploadUrls }),
          credentials: "include",
        });
        const data = await response.json();
        if (response.ok) {
          errorRef.current.style.color = "blue";
          errorRef.current.textContent = `${data.Message}, returning back wthin 3s`;
          setTimeout(() => {
            navigate(`/${backUrl}`, { replace: true });
          }, 3000);
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
        if (shopname.length === 0) {
          errorRef.current.textContent = "Please Enter Shop Name";
        } else if (shopaddress.length === 0) {
          errorRef.current.textContent = "Please Enter Shop Address";
        }
      }
    }
  };
  return (
    <div className="registershop">
      <form>
        <div className="form">
          <div className="details">
            <label htmlFor="name">Name</label>
            <strong>:</strong>
            <p id="name">
              {user.firstname} {user.middlename} {user.lastname}
            </p>

            <label htmlFor="email">Email</label>
            <strong>:</strong>
            <p id="email">{user.email}</p>

            <label htmlFor="shopname">Shop Name</label>
            <strong>:</strong>
            <input
              type="text"
              name="shopname"
              id="shopname"
              placeholder="Enter your Shop name"
              onChange={(e) => setShopname(e.target.value)}
              autoComplete="on"
              autoFocus
              required
            />

            <label htmlFor="shopaddr">Shop Address</label>
            <strong>:</strong>
            <input
              type="text"
              name="shopaddr"
              id="shopaddr"
              placeholder="Enter your Shop Address"
              onChange={(e) => setshopAddress(e.target.value)}
              autoComplete="on"
              required
            />

            <label htmlFor="shopaddr">Shop Images</label>
            <strong>:</strong>
            <UploadThings ref={uploadRef} />
          </div>
          <h4 ref={errorRef}>All Field are mandatory... </h4>
          <button type="submit" onClick={(e) => onSubmit(e)}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Registershop;
