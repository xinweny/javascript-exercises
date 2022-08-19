const ftoc = function(f) {
  const c = (f - 32) * (5 / 9);
  return c % 1 === 0 ? c : Number(c.toFixed(1));
};

const ctof = function(c) {
  const f = (c * 9 / 5) + 32;
  return f % 1 === 0 ? f : Number(f.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
