import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import removeSegment from "../../../usefullFunction/removeSegment";

const Contain = () => {
  const backUrl = removeSegment(window.location.pathname, 1);
  return (
    <div className="academyContain">
      <Link to={`/${backUrl}`}>
        <FaArrowLeft className="icon prebtn" style={{ color: "red" }} />
      </Link>
      <h1 style={{ color: "white" }}>
        Currently Gathering Information for Academy's. So, currently Academy
        contain is not available
      </h1>
    </div>
  );
};
export default Contain;
