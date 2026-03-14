// 2165 - Smallest Value of the Rearranged Number

function smallestNumber(num) {
    const isNegative = num < 0;
    num = Math.abs(num).toString().split('');
    if (isNegative) return -num.sort((a, b) => b - a).join('');
    num.sort();
    if (num[0] !== '0') return +num.join('');
    const index = num.findIndex(e => e !== '0');
    num[0] = num[index];
    num[index] = 0;
    return +num.join('');
}
