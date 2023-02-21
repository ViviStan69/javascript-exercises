const repeatString = function(string, num) {
    outputString = "";

    if (num < 0) return "ERROR";

    for (i=num; i>0; i--) {
        outputString += string;
    }
    
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
