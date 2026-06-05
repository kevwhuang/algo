// 1931. Painting a Grid With Three Different Colors

function colorTheGrid(m, n) {
    function init() {
        dict = Array.from({ length: 5 }, () => new Uint32Array(1001));
        M = null, A = null;
        for (let m = 1; m < 6; m++) {
            M = [], A = new Array(m);
            for (let a = 0; a < 3; a++) {
                A[0] = a;
                recurse(1);
            }
            const n = M.length, adj = Array.from({ length: n }, () => []);
            for (let i = 0; i < n; i++) {
                const A1 = M[i];
                for (let j = 0; j < n; j++) {
                    let A2 = M[j];
                    for (let k = 0; A2 && k < m; k++) {
                        if (A1[k] === A2[k]) A2 = null;
                    }
                    if (A2) adj[i].push(j);
                }
            }
            dict[m - 1][1] = n;
            let dp = new Array(n).fill(1), N = new Array(n), swap;
            const mod = 1e9 + 7;
            for (let nn = 2; nn < 1001; nn++) {
                N.fill(0);
                for (let i = 0; i < n; i++) {
                    const AA = adj[i];
                    for (let j = 0; j < AA.length; j++) {
                        N[i] = (N[i] + dp[AA[j]]) % mod;
                    }
                }
                dict[m - 1][nn] = N.reduce((s, e) => s + e) % mod;
                swap = dp, dp = N, N = swap;
            }
        }
    }
    function recurse(i) {
        if (i === A.length) return M.push([...A]);
        for (let a = 0; a < 3; a++) {
            if (a === A[i - 1]) continue;
            A[i] = a;
            recurse(i + 1);
        }
    }
    if (!this.dict) init();
    return dict[m - 1][n];
}
