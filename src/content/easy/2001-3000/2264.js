// 2264 - Largest 3-Same-Digit Number in String

function largestGoodInteger(num) {
    let max = '';
    for (let i = 0; i < num.length - 2; i++) {
        const n = num.slice(i, i + 3);
        if (n[0] === n[1] && n[1] === n[2] && n > max) max = n;
    }
    return max;
}
