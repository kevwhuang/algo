// 1017 - Convert to Base -2

function baseNeg2(n) {
    if (n === 0 || n === 1) return String(n);
    return baseNeg2(-(n >> 1)) + String(n & 1);
}
