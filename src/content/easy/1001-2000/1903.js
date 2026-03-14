// 1903 - Largest Odd Number in String

function largestOddNumber(num) {
    let i = num.length;
    while (~--i) {
        if (num[i] % 2) return num.slice(0, i + 1);
    }
    return '';
}
