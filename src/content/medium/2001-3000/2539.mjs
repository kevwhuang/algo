// 2539 - Count the Number of Good Subsequences

function countGoodSubsequences(s) {
    function init() {
        fac = new BigUint64Array(10001);
        inv = new BigUint64Array(10001).fill(1n);
        fac[0] = 1n;
        for (let i = 1; i < 10001; i++) {
            fac[i] = fac[i - 1] * BigInt(i) % mod;
            let base = fac[i], exp = 1000000005n;
            while (exp) {
                if (exp & 1n) inv[i] = inv[i] * base % mod;
                base = base * base % mod;
                exp >>= 1n;
            }
        }
    }
    const mod = 1000000007n;
    if (this.fac === undefined) init();
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) ?? 0) + 1);
    }
    let res = 0n;
    const max = Math.max(...map.values());
    for (let k = 1; k <= max; k++) {
        let acc = 1n;
        for (const n of map.values()) {
            if (n < k) continue;
            acc = acc * (fac[n] * inv[k] % mod * inv[n - k] + 1n) % mod;
        }
        res = (res + acc - 1n) % mod;
    }
    return Number(res);
}
