export const formatToRupiah = (amount: number): string => {
  const numberString = amount.toString().replace(/,/g, "");

  const [integerPart, decimalPart] = numberString.split(".");

  const formattedIntegerPart = integerPart
    .split("")
    .reverse()
    .reduce((acc, char, index) => {
      return char + (index && index % 3 === 0 ? "." : "") + acc;
    }, "");

  const formattedNumber = decimalPart
    ? `${formattedIntegerPart},${decimalPart}`
    : formattedIntegerPart;

  return `Rp ${formattedNumber}`;
};
