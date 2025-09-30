import { useState, useEffect, useRef } from "react";
import { formattedTime } from "../utils";

const UPDATE_INTERVAL_MS = 1000;

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn) {
      const timerId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, UPDATE_INTERVAL_MS);
      timerRef.current = timerId;
    } else {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    return () => clearInterval(timerRef.current);
  }, [isOn]);

  const handleReset = () => {
    setTime(0);
    setIsOn(false);
  };

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div>
      {formattedTime(time)}
      <button onClick={handleToggle}>{isOn ? "끄기" : "켜기"}</button>
      <button onClick={handleReset}>리셋</button>
    </div>
  );
};

export default StopWatch;
