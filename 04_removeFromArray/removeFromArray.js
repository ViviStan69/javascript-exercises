const removeFromArray = function (array, ...elementsToRemove) {
    resultArray = [];
    for (const element of array) {
        if (elementsToRemove.indexOf(element) != -1) {
            continue;
        }
        else resultArray.push(element);
    }
    return resultArray;
};

// Do not edit below this line
module.exports = removeFromArray;
