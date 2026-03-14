// 1085 - Sum of Digits in the Minimum Number

function sumOfDigits(nums) {
    let sum = 0;
    const str = Math.min(...nums).toString();
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum % 2 ? 0 : 1;
}
