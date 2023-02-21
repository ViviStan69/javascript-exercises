const sumAll = function(num1, num2) {
    // exit on invalid inputs
    if (num1 < 0 || num2 < 0) return "ERROR";
    if (!(typeof(num1) == "number") || !(typeof(num2) == "number")) return "ERROR";
    // ensure numbers are ordered low to high
    if (num1 > num2) {
        placeholder = num1;
        num1 = num2;
        num2 = placeholder;
    }
    
    sum = 0;
    for (let i=num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
