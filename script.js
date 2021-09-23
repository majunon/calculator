function add(a, b) {
  return (a + b);
};

function substract(a, b) {
  return (a - b);
};

function multiply(a, b) {
  return (a * b);
};

function divide(a, b) {
  return (a / b);
};

function operate(operator, a, b) {
  switch (operator) {
    case plus:
      return (add(a, b));
      break;
    case minus:
      return (substract(a, b));
      break;
    case multiplication:
      return (multiply(a, b));
      break;
    case division:
      return (divide(a, b));
      break;
  }
};