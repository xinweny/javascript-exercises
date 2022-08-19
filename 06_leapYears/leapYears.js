const leapYears = function(year) {
    if (!(year % 4)) {
        return !(year % 100) ? !(year % 400) : true;
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
