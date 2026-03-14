// 2578 - Split With Minimum Sum

function splitNum(num) {
    num = num.toString().split('').sort((a, b) => a - b);
    let sum = 0;
    for (let i = num.length - 1, mult = 1; i >= 0; i -= 2, mult *= 10) {
        sum += num[i] * mult + (num[i - 1] || 0) * mult;
    }
    return sum;
}
