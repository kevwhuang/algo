// 1923. Longest Common Subpath

function longestCommonSubpath(n, paths) {
    if (this.dict === undefined) {
        dict = new Array(1e5), mod = 5e10 + 21;
        for (let pow = 1, exp = 0; exp < 1e5; exp++) {
            dict[exp] = pow, pow = 1e5 * pow % mod;
        }
    }
    n = paths.length;
    let idx = 0;
    for (let i = 1; i < n; i++) {
        if (paths[i].length < paths[idx].length) idx = i;
    }
    [paths[0], paths[idx]] = [paths[idx], paths[0]];
    let l = 0, r = paths[0].length;
    while (l <= r) {
        let set = new Set();
        const m = l + r >> 1;
        for (let i = 0; i < n; i++) {
            const N = new Set(), A = paths[i];
            for (let hash = 0, j = 0; j < A.length; j++) {
                hash = (1e5 * hash + A[j]) % mod;
                if (j >= m) hash -= dict[m] * A[j - m] % mod - mod, hash %= mod;
                if (j >= m - 1 && set.size < 1 || set.has(hash)) N.add(hash);
            }
            set = N;
            if (set.size < 1) break;
        }
        if (set.size) l = m + 1;
        else r = m - 1;
    }
    return r;
}
