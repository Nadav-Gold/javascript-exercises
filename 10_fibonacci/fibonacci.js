const fibonacci = function (index) {
    if (index == 0) return 0;
    if (index < 0) return "OOPS";
    const fibArr = [1, 1];
    for (let i = 2; i < +index; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1];
    }
    return fibArr[index-1];
};

// Do not edit below this line
module.exports = fibonacci;
