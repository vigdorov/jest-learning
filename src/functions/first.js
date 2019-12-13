const summaryTwoNumbers = (first, second) => {
  return first + second;
};

const calculateTwoNumbers = (first, second, operation) => {
  if (
    typeof first !== 'number' ||
    typeof second !== 'number' ||
    typeof operation !== 'string'
  ) {
    return NaN;
  }

  switch (operation) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    case '/':
      return first / second;
    default:
      return NaN;
  }
};

module.exports = {
  summaryTwoNumbers,
  calculateTwoNumbers
};
