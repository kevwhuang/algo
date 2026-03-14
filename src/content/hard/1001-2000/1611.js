// 1611 - Minimum One Bit Operations to Make Integers Zero

function minimumOneBitOperations(n) {
    let res = 0;
    while (n) res ^= n, n >>= 1;
    return res;
}
