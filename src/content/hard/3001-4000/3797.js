// 3797 - Count Routes to Climb a Rectangular Grid

function numberOfRoutes(grid, d) {
    function fn(A, dp1, dp2, d) {
        pre[0] = dp1[0];
        for (let y = 1; y < n; y++) {
            pre[y] = (pre[y - 1] + dp1[y]) % mod;
        }
        for (let y = 0; y < n; y++) {
            if (A[y] === '#' && !(dp2[y] = 0)) continue;
            const l = Math.max(0, y - d);
            const r = Math.min(y + d, n - 1);
            dp2[y] = (pre[r] - (l ? pre[l - 1] : 0) + mod) % mod;
        }
    }
    if (!this.dp1) dp1 = new Uint32Array(750);
    if (!this.dp2) dp2 = new Uint32Array(750);
    if (!this.pre) pre = new Uint32Array(750);
    const M = grid, m = M.length, n = M[0].length;
    for (let y = 0; y < n; y++) {
        dp1[y] = M[m - 1][y] === '.' ? 1 : 0;
    }
    const dd = (d * d - 1) ** 0.5 >> 0, mod = 1e9 + 7;
    for (let x = m - 1; ~x; x--) {
        fn(M[x], dp1, dp2, d);
        if (x) fn(M[x - 1], dp2, dp1, dd);
    }
    let res = 0;
    for (let y = 0; y < n; y++) {
        res = (res + dp2[y]) % mod;
    }
    return res;
}
