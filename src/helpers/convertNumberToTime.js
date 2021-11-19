export const convertNumberToTime = (num) => {
  const h = (num - (num % 60)) / 60;
  const m = num - h * 60;
  const hourString = h < 1 ? `` : h === 1 ? `${h} Hour` : `${h} Hours`;
  const minuteString = m === 0 ? "" : m > 1 ? `${m} Minutes` : `${m} Minute`;
  return hourString + " " + minuteString;
};

export const objectToTimeString = ({ h, m }) => {
  const hourString = h < 1 ? `` : h === 1 ? `${h} Hour` : `${h} Hours`;
  const minuteString = m === 0 ? "" : m > 1 ? `${m} Minutes` : `${m} Minute`;
  return hourString + " " + minuteString;
};
