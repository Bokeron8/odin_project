const reverseString = function(string) {
    let splitedString = string.split('');
    let reversedString = (splitedString.reverse()).join('');
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
