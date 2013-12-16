function Generator() {
}

Generator.prototype.romanNumeralGenerator = function(number) {
  SYMBOLS = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };

  var result = "";
  var decimalValues = Object.keys(SYMBOLS).reverse();

  for (var i = 0; i < decimalValues.length; i += 1) {
    var decimalValue = parseInt(decimalValues[i]);

    while (number >= decimalValue) {
      result += SYMBOLS[decimalValue];
      number -= decimalValue;
    }
  }

  return result;
};
