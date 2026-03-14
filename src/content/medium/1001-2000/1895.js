// 1895 - Largest Magic Square

function largestMagicSquare(grid) {
    const check = (r, c) => ~r && r < m && ~c && c < n;
    const M = grid, m = M.length, n = M[0].length;
    const ps1 = Array.from({ length: m }, () => new Uint32Array(n));
    const ps2 = Array.from({ length: m }, () => new Uint32Array(n));
    const ps3 = Array.from({ length: m }, () => new Uint32Array(n));
    const ps4 = Array.from({ length: m }, () => new Uint32Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            ps1[r][c] = ps2[r][c] = ps3[r][c] = ps4[r][c] = M[r][c];
            if (c) ps1[r][c] += ps1[r][c - 1];
            if (r) ps2[r][c] += ps2[r - 1][c];
            if (check(r - 1, c - 1)) ps3[r][c] += ps3[r - 1][c - 1];
            if (check(r - 1, c + 1)) ps4[r][c] += ps4[r - 1][c + 1];
        }
    }
    for (let d = Math.min(m, n); d > 1; d--) {
        const mm = m - d + 1, nn = n - d + 1;
        for (let r = 0; r < mm; r++) {
            L: for (let c = 0; c < nn; c++) {
                let a = ps3[r + d - 1][c + d - 1], b = ps4[r + d - 1][c];
                if (check(r - 1, c - 1)) a -= ps3[r - 1][c - 1];
                if (check(r - 1, c + d)) b -= ps4[r - 1][c + d];
                if (a !== b) continue;
                const mmm = r + d, nnn = c + d;
                for (let rr = r; rr < mmm; rr++) {
                    let sum = ps1[rr][c + d - 1];
                    if (check(rr, c - 1)) sum -= ps1[rr][c - 1];
                    if (sum !== a) continue L;
                }
                for (let cc = c; cc < nnn; cc++) {
                    let sum = ps2[r + d - 1][cc];
                    if (check(r - 1, cc)) sum -= ps2[r - 1][cc];
                    if (sum !== a) continue L;
                }
                return d;
            }
        }
    }
    return 1;
}
