const repeatString = function(string, num) {
    // Recursion method
    if (num == 0) {
        return '';
    } else if (num == 1) {
        return string;
    } else {
        return repeatString(string, num - 1) + string;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
