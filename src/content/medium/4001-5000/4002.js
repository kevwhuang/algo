// 4002. Count Valid Sequences

function countValidSequences(n, k) {
    function fn(a, b) {
        b = Math.min(b, a - b);
        let c = 1n, d = 1n, exp = mod - 2n;
        while (~--b) c = c * BigInt(a - b) % mod, d = d * BigInt(b + 1) % mod;
        while (exp) c = exp & 1n ? c * d % mod : c, d = d * d % mod, exp >>= 1n;
        return c;
    }
    const mod = 1000000007n;
    const a = fn(n - 1, k - 1);
    const b = (n - k) % 2 ? 0n : fn((n + k) / 2 - 1, k - 1);
    return Number((a - b + mod) % mod);
}
