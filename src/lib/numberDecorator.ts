export const numberDecorator = (numValue: number): string => {
  const stringValue = "" + numValue;
  const [num, frac] = stringValue.split(".");
  const reversedArrayValues = num.split("").reverse();
  const resArray = [];
  resArray.unshift(reversedArrayValues[0]);
  for (let i = 1; i < reversedArrayValues.length; i++) {
    if (!(i % 3)) resArray.unshift(",");
    resArray.unshift(reversedArrayValues[i]);
  }
  return `${resArray.join("")}${frac ? "." + frac : ""}`;
};
