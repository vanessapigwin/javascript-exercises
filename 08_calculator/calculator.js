const add = function(...args) {
  let total = 0;
	args.forEach((arg) => total += arg);
  return total;
};

const subtract = function(...args) {
	return args[0] - args[1];
};

const sum = function(args) {
	let total = 0;
	args.forEach((arg) => total += arg);
  return total;
};

const multiply = function(...args) {
  let product = 1;
  args.forEach((arg)=>product *= arg);
  return product;
};

const power = (m, n) => m**n;

const factorial = function(n) {
	let product = 1
  for (i=0; i <= n; i++) {
    product *= (i - 1 > 0) ? (i) : 1; 
  }
  return product;
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
