const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numArray) {
	return numArray.reduce((total, currentVal) => total + currentVal, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((total, currentVal) => total * currentVal, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  result = 1;
	for (let i=a; i>1; i--) result *= i;
  return result;
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
