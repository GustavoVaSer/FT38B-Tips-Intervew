function HasBalancedBrackets(string) {
  const stack = [];
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];
  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpeningBracket = stack.pop();
      if (lastOpeningBracket !== bracketPairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = HasBalancedBrackets;
