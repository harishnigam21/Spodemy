import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const padZero = (num) => String(num).padStart(2, "0");

const useTimer = (targetHour, targetMinute, targetSecond) => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const navigate = useNavigate();
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setSecond((prevSecond) => {
        if (prevSecond === 59) {
          setMinute((prevMinute) => {
            if (prevMinute === 59) {
              setHour((prevHour) => prevHour + 1);
              return 0;
            }
            return prevMinute + 1;
          });
          return 0;
        }
        return prevSecond + 1;
      });
    }, 1000); 
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  useEffect(() => {
    if (
      hour >= targetHour &&
      minute >= targetMinute &&
      second >= targetSecond
    ) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      navigate(-1);
    }
  }, [hour, minute, second, targetHour, targetMinute, targetSecond]); 
  return {
    hour: padZero(hour),
    minute: padZero(minute),
    second: padZero(second),
    isTimerRunning: !(
      hour >= targetHour &&
      minute >= targetMinute &&
      second >= targetSecond
    ),
  };
};

export default useTimer;
