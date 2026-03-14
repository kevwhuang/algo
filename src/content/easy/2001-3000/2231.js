// 2231 - Largest Number After Digit Swaps by Parity

function largestInteger(num) {
    num = num.toString().split('');
    const odds = [], evens = [];
    for (let i = 0; i < num.length; i++) {
        (num[i] % 2 ? odds : evens).push(num[i]);
    }
    odds.sort((a, b) => b - a);
    evens.sort((a, b) => b - a);
    let res = 0;
    for (let i = 0, j = 0, k = 0; i < num.length; i++) {
        res *= 10;
        res += Number(num[i] % 2 ? odds[j++] : evens[k++]);
    }
    return res;
}
