const sumAll = function(num1, num2) {
  let value = 0;

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "ERROR";
  } else if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else if (num1 < num2) {
    for (i=num1; i<= num2; i++) {
      value += i
    }
  } else {
    for (i=num2; i<=num1; i++){
      value += i;
    }
  }
  return value;
};

// Do not edit below this line
module.exports = sumAll;
