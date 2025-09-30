import { useState, useEffect, useRef } from "react";
import formatTime from "../utils/formatTime";

const Timer = () => {
  const [startTime, setStarTime] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn && time > 0) {
      setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
      timerRef.current = timerId;
    } else if (!isOn || time === 0) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isOn, time]);

  return (
    <div>
      <div>
        {time ? formatTime(time) : formatTime(startTime)}
        <button
          onClick={() => {
            setIsOn(true);
            setTime(time ? time : startTime);
            setStartTime(0);
          }}
        >
          시작
        </button>
        <button onClick={() => setIsOn(false)}>멈춤</button>
        <button onClick={() => setIsOn(false)}>리셋</button>
      </div>
      <input
        type="range"
        value={startTime}
        min="0"
        max="3600"
        step="30"
        onChange={(event) => setStarTime(event.target.value)}
      />
    </div>
  );
};

export default Timer;
