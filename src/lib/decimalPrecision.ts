export const sanitizeValue = (value: string, maxDecimalPlaces: number) => {
  const regexPattern = new RegExp(`^-?\\d*(\\.\\d{0,${maxDecimalPlaces}})?$`);

  if (regexPattern.test(value)) {
    return value;
  } else {
    return undefined;
  }
};
