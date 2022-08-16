const removeFromArray = function(array) {
    const args = Array.from(arguments);
    args.shift();
    args.forEach(arg => {
        index = array.indexOf(arg);
        if (index > -1){
            array.splice(index, 1)
        }
    });
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
