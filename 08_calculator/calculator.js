const add = function(num1, num2) {
	let sum = num1 + num2
  return sum
};

const subtract = function(num1, num2) {
	let diff = num1 - num2
  return diff
};

const sum = function([...num]) {
	let add = 0
  for(let i = 0; i < [...num].length; i++) {
    add = add + ([...num][i])
  }
  return parseInt(add)
};

const multiply = function([...num]) {
  let product = 1;
  for (let i = 0; i < [...num].length; i++) {
    product = product * ([...num][i])
  }
  return product
};

const power = function(base, raise) {
	let result = (base ** raise)
  return result
};

const factorial = function(num) {
  let answer = 1;
	if(num == 0 || num == 1) {
    return answer
  } else {
    for (let i = num; i >= 1; i--) {
      answer = answer * i
    }
    return answer
  }
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
