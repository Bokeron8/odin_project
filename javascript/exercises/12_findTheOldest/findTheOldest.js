const findTheOldest = function(peoples) {
    const oldest = peoples.reduce((previusValue, currentValue)=>{
        const year = new Date().getFullYear();
        previusAge = 'yearOfDeath' in previusValue? previusValue.yearOfDeath - previusValue.yearOfBirth: year - previusValue.yearOfBirth;
        currentAge = 'yearOfDeath' in currentValue? currentValue.yearOfDeath - currentValue.yearOfBirth: year - currentValue.yearOfBirth;
        return previusAge > currentAge? previusValue: currentValue;
    });
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
