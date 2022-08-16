const leapYears = function(year) {
    let isLeap;
    isLeap = ((year%4 == 0 && year%100 != 0) || year%400 == 0); 
    return isLeap
};

// Do not edit below this line
module.exports = leapYears;
