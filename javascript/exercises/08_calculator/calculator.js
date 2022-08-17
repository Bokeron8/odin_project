const add = function(a, b) {
	return a+b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(nums) {
	return nums.reduce((a, b) => a+b, 0);
};

const multiply = function(nums) {
  return nums.reduce((a, b) => a*b, 1);
};

const power = function(a, b) {
	return a**b
};

const factorial = function(n) {
  return n > 1?  factorial(n - 1)*n: 1
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
