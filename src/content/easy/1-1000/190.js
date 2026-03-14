// 190 - Reverse Bits

function reverseBits(n) {
    let res = 0, i = 0;
    while (i++ < 32) res = res << 1 | n & 1, n >>= 1;
    return res >>> 0;
}
