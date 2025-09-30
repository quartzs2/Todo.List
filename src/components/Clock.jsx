import { useState, useEffect } from "react";

const UPDATE_INTERVAL_MS = 1000;

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, UPDATE_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
};

export default Clock;
