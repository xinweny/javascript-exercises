const ftoc = function(f) {
  const c = (f - 32) * (5 / 9);
  return c % 1 === 0 ? c : Number(c.toFixed(1));
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
