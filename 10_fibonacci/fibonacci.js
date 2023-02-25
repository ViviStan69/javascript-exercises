const fibonacci = function(num) {
    if (num < 1) return "OOPS";
    
    fibSequence = [1];
    while (num > fibSequence.length) {
        if (!fibSequence[fibSequence.length-2]) fibSequence.push(1);
        fibSequence.push(fibSequence[fibSequence.length-1] + fibSequence[fibSequence.length-2]);
    }
    return fibSequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
