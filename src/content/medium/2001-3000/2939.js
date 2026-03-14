// 2939 - Maximum XOR Product

function maximumXorProduct(a, b, n) {
    a = BigInt(a), b = BigInt(b), n = 2n ** BigInt(n);
    while (n) {
        n >>= 1n;
        if ((a ^ n) * (b ^ n) < a * b) continue;
        a ^= n;
        b ^= n;
    }
    return Number(a * b % 1000000007n);
}
