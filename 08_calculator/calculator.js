const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, n) => sum += n, 0);
};

const multiply = function(arr) {
  return arr.reduce((mult, n) => mult *= n, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  const nums = [...Array(n + 1).keys()].slice(1);
	return nums.reduce((f, n) => f *= n, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
