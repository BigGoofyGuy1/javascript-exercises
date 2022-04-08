const ftoc = function(tempF) {
  let toC = (tempF - 32) * 5/9

  
  return parseFloat(toC.toFixed(1))
};



const ctof = function(tempC) {
  let toF = (tempC * 9/5) + 32

  return parseFloat(toF.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
