const leapYears = function (year) {
    if (year % 100 === 0) {
        return (year % 4 === 0 && year % 400 === 0);
    } else {
        return (year % 4 === 0);
    }
};

// Do not edit below this line
module.exports = leapYears;
