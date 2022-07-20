const Calculator = {
  add: (...num) => num.reduce((p, c) => p + c),
  sub: (...num) => num.reduce((p, c) => p - c),
  div: (...num) => num.reduce((p, c) => p / c),
  multi: (...num) => num.reduce((p, c) => p * c),
};

module.exports = Calculator;
