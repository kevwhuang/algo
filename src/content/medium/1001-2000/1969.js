// 1969 - Minimum Non-Zero Product of the Array Elements

function minNonZeroProduct(p) {
    function pow(num, exp) {
        if (exp === 0n) return 1n;
        return pow(num, exp / 2n) ** 2n * (exp % 2n ? num : 1) % mod;
    }
    const num = 2n ** BigInt(p) - 2n;
    const mod = 1000000007n;
    return Number(pow(num, num / 2n) * (num + 1n) % mod);
}
