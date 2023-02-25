const palindromes = function (str) {
    let strippedString = str.toLowerCase().replaceAll(',', '').replaceAll('!', '').replaceAll('.', '').replaceAll(' ', '');
    return (strippedString == strippedString.split('').reverse().join(''));
};

// Do not edit below this line
module.exports = palindromes;
