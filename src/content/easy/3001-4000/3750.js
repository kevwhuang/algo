// 3750 - Minimum Number of Flips to Reverse Binary String

function minimumFlips(n) {
    let res = 0, mask1 = 1 << 31 - Math.clz32(n), mask2 = 1;
    while (mask1 > mask2) {
        if (Boolean(n & mask1) !== Boolean(n & mask2)) res += 2;
        mask1 >>= 1, mask2 <<= 1;
    }
    return res;
}
