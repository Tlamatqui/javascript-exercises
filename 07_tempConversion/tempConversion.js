const ftoc = function(temp) {
  const cel = (temp-32) * (5/9);
  return Number(cel.toFixed(1));
};

const ctof = function(temp) {
  const fare = temp * 9/5 + 32;
  return Number(fare.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
