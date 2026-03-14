// 940 - Distinct Subsequences II

function distinctSubseqII(s) {
    let res = 0, i = -1;
    const seen = new Uint32Array(26), n = s.length, mod = 1000000007;
    while (++i < n) {
        const j = s.charCodeAt(i) - 97, prev = seen[j];
        seen[j] = (res + 1) % mod, res = (2 * res + mod - prev + 1) % mod;
    }
    return res;
}
