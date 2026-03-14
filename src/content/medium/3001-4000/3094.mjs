// 3094 - Guess the Number Using Bitwise Questions II

function findNumber() {
    let res = 0;
    for (let cur = 1, i = 0; i <= 29; cur *= 2, i++) {
        const a = commonBits(cur), b = commonBits(cur);
        if (a > b) res += cur;
    }
    return res;
}
