// 461 - Hamming Distance

function hammingDistance(x, y) {
    let res = 0, xor = x ^ y;
    while (xor) res += xor & 1, xor >>= 1;
    return res;
}
