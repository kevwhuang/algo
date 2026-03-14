// 1284 - Minimum Number of Flips to Convert Binary Matrix to Zero Matrix

function minFlips(mat) {
    const dict = [], m = mat.length, n = mat[0].length;
    let mask = 0, k = 1 << m * n;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            dict.push(k >>= 1);
            if (mat[r][c]) mask |= k;
        }
    }
    if (mask === 0) return 0;
    let res = 1, Q = [mask];
    const seen = new Set(Q);
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            for (let r = 0; r < m; r++) {
                for (let c = 0; c < n; c++) {
                    const j = n * r + c;
                    let next = Q[i] ^ dict[j];
                    if (r) next ^= dict[j - n];
                    if (r + 1 < m) next ^= dict[j + n];
                    if (c) next ^= dict[j - 1];
                    if (c + 1 < n) next ^= dict[j + 1];
                    if (next === 0) return res;
                    if (seen.has(next)) continue;
                    seen.add(next);
                    N.push(next);
                }
            }
        }
        res++, Q = N;
    }
    return -1;
}
