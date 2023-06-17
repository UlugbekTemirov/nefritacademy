const PriceFormatter = ({ amount }) => {
  function convertToDotFormat(number) {
    const numberString = String(number);

    const numberArray = numberString.split("");

    let dotFormattedNumber = "";
    let dotCounter = 0;

    for (let i = numberArray.length - 1; i >= 0; i--) {
      dotFormattedNumber = numberArray[i] + dotFormattedNumber;

      dotCounter++;

      if (dotCounter % 3 === 0 && i !== 0) {
        dotFormattedNumber = "." + dotFormattedNumber;
      }
    }

    return dotFormattedNumber;
  }

  return convertToDotFormat(amount);
};

export default PriceFormatter;
