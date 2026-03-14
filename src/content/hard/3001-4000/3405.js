// 3405 - Count the Number of Arrays With K Matching Adjacent Elements

function countGoodArrays(n, m, k) {
    function init() {
        dict1 = new BigUint64Array(100000), dict1[0] = 1n;
        for (let i = 1; i < 100000; i++) {
            dict1[i] = dict1[i - 1] * BigInt(i) % mod;
        }
        dict2 = new BigUint64Array(100000);
        dict2[99999] = fn(dict1[99999], mod - 2n);
        for (let i = 99998; ~i; i--) {
            dict2[i] = dict2[i + 1] * BigInt(i + 1) % mod;
        }
    }
    function fn(a, k) {
        let pow = 1n;
        while (k) {
            if (k & 1n) pow = pow * a % mod;
            a = a * a % mod;
            k >>= 1n;
        }
        return pow;
    }
    const mod = 1000000007n;
    if (!this.dict1) init();
    const a = dict1[n - 1] * dict2[n - k - 1] * dict2[k];
    const b = fn(BigInt(m - 1), BigInt(n - k - 1));
    return Number(BigInt(m) * a * b % mod);
}
