function BinaryToDecimal(binary) {
  let decimal = 0;

  for (let i = binary.length - 1; i >= 0; i--) {
    const bit = parseInt(binary[i]);
    const power = binary.length - 1 - i;
    decimal += bit * Math.pow(2, power);
  }

  return decimal;
}

module.exports = BinaryToDecimal;
