// 693 - Binary Number With Alternating Bits

function hasAlternatingBits(n) {
    let bit = n & 1 ? 0 : 1;
    while (n) {
        if ((n & 1) === bit) return false;
        n >>>= 1;
        bit = bit ? 0 : 1;
    }
    return true;
}
