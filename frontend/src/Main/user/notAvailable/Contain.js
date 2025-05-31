import useTimer from "../../../usefullFunction/timer";
const Contain = () => {
  const { hour, minute, second, isTimerRunning } = useTimer(0, 0, 5);
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
