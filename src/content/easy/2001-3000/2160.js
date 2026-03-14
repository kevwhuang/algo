// 2160 - Minimum Sum of Four Digit Number After Splitting Digits

function minimumSum(num) {
    const str = num.toString().split('').sort();
    return Number(str[0] + str[3]) + Number(str[1] + str[2]);
}
