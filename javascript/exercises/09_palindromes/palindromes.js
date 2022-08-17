const palindromes = function (string) {
    string = string.toLowerCase();
    letterStr = string.split('').filter((char)=> char.match(/[a-z]/i));
    modifiedString = letterStr.join('');
    reversedString = letterStr.reverse().join('');
    return reversedString == modifiedString
};

// Do not edit below this line
module.exports = palindromes;
