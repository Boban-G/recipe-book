
export const limitStringSize = (string, type, targetedLength) => {
  if (type === "list") {
    const tempArr = string.split(",");
    if (tempArr.length <= targetedLength) {
      return string;
    } else {
      const shortenArr = tempArr.slice(0, targetedLength);
      console.log(shortenArr);
      return shortenArr.join(",") + "...";
    }
  }
  if (type === "string") {
    if (string.length <= targetedLength) return string;
    const tempStringArr = string.split(" ");
    let tempString = "";
    let letterCounter = 0;
    tempStringArr.forEach((word) => {
      letterCounter += word.length;
      if (letterCounter <= targetedLength) {
        tempString += word + " ";
      }
    });
    tempString += "...";
    return tempString;
  }
};
