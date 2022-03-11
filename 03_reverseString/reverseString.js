const reverseString = function(str) {
  let split = str.split("");
  const reverse = split.reverse();
  let join = reverse.join("");

  return join;
};

// Do not edit below this line
module.exports = reverseString;