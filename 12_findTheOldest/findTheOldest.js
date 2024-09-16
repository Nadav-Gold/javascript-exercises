const findTheOldest = function (people) {
    const temp = people.toSorted((a, b) => {
        let firstAge =
            (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
        let secondAge =
            (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
        return secondAge - firstAge;
    });
    return temp[0];
};

// Do not edit below this line
module.exports = findTheOldest;
