export const formattedTime = (seconds) => {
  const SECONDS_PER_HOUR = 3600;
  const SECONDS_PER_MINUTE = 60;
  const TIME_PADDING = 2;
  const PADDING_CHAR = "0";

  const hours = Math.floor(seconds / SECONDS_PER_HOUR);
  const minutes = Math.floor((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MINUTE);
  const remainingSeconds = seconds % SECONDS_PER_MINUTE;

  const formattedHours = String(hours).padStart(TIME_PADDING, PADDING_CHAR);
  const formattedMinutes = String(minutes).padStart(TIME_PADDING, PADDING_CHAR);
  const formattedSeconds = String(remainingSeconds).padStart(TIME_PADDING, PADDING_CHAR);

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};
