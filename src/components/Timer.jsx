import { useState, useEffect, useRef } from "react";
import { formattedTime } from "../utils/formattedTime";

const UPDATE_INTERVAL_MS = 1000;
const MAX_TIMER_SECONDS = 3600;
const MIN_TIMER_SECONDS = 0;
const TIMER_STEP_SECONDS = 30;

const Timer = () => {
  const [isOn, setIsOn] = useState(false);
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isOn && time > 0) {
      const timerId = setInterval(() => {
        setTime((prev) => prev - 1);
      }, UPDATE_INTERVAL_MS);

      timerRef.current = timerId;
    } else {
      const shouldStopTimer = !isOn || time === 0;
      if (shouldStopTimer) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [isOn, time]);

  const handleToggle = () => {
    if (!isOn && time === 0) {
      alert("시작 시간을 입력해주세요");
      return;
    }

    setIsOn((prev) => !prev);

    if (time === 0) {
      setTime(startTime);
    }
  };

  const handleReset = () => {
    setTime(0);
    setStartTime(0);
    setIsOn(false);
  };

  const handleChangeStartTime = (value) => {
    const numericValue = Number(value);
    setStartTime(numericValue);
    setTime(numericValue);
  };

  const parsedTime = formattedTime(time);

  return (
    <div>
      <div>
        {parsedTime}
        <button onClick={handleToggle}>{isOn ? "멈춤" : "시작"}</button>
        {!isOn && <button onClick={handleReset}>리셋</button>}
      </div>
      {!isOn && (
        <input
          type="range"
          value={startTime}
          min={MIN_TIMER_SECONDS}
          max={MAX_TIMER_SECONDS}
          step={TIMER_STEP_SECONDS}
          onChange={(event) => handleChangeStartTime(event.target.value)}
        />
      )}
    </div>
  );
};

export default Timer;
