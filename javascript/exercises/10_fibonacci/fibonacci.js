const fibonacci = function(a) {
    a = parseInt(a)
    if (a > 2){
        return fibonacci(a-1) + fibonacci(a-2)
    }
    else if (a > 0){
        return 1
    }
    else{
        return 'OOPS'
    }
};

// Do not edit below this line
module.exports = fibonacci;
