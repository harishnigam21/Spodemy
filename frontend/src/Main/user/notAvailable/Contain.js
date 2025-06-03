import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useTimer from "../../../usefullFunction/timer";
const Contain = () => {
  const navigate = useNavigate();
  const { second } = useTimer(0, 0, 5);
  useEffect(() => {
    if (second === "05") {
      navigate(-1);
    }
  }, [second,navigate]);
  return (
    <div className="notavailable">
      <h1>404 : NOT FOUND</h1>
      <strong>
        Sorry! we don't serve this page currently, sending back you to previous
        page within 5s
      </strong>
      <p>{second}</p>
    </div>
  );
};
export default Contain;
