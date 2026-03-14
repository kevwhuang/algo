// 1463 - Cherry Pickup II

function cherryPickup(grid) {
    if (!this.dp1) dp1 = Array.from({ length: 70 }, () => new Uint16Array(70));
    if (!this.dp2) dp2 = Array.from({ length: 70 }, () => new Uint16Array(70));
    const M = grid, m = M.length, n = M[0].length;
    for (let r = 0; r < n; r++) {
        dp1[r].fill(0, 0, n);
    }
    dp1[0][n - 1] = M[0][0] + M[0][n - 1];
    for (let cur, r = 1; r < m; r++) {
        for (let rr = 0; rr < n; rr++) {
            dp2[rr].fill(0, 0, n);
        }
        const min = Math.min(r, n - 1);
        for (let c1 = 0; c1 <= min; c1++) {
            for (let c2 = Math.max(c1, n - r - 1); c2 < n; c2++) {
                let max = 0;
                for (let dc1 = -1; dc1 <= 1; dc1++) {
                    for (let dc2 = -1; dc2 <= 1; dc2++) {
                        const cc1 = c1 + dc1, cc2 = c2 + dc2;
                        if (cc1 < 0 || cc1 === n) continue;
                        if (cc2 < 0 || cc2 === n) continue;
                        max = Math.max(dp1[cc1][cc2], max);
                    }
                }
                dp2[c1][c2] = max + M[r][c1] + (c1 < c2 ? M[r][c2] : 0);
            }
        }
        cur = dp1, dp1 = dp2, dp2 = cur;
    }
    let res = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            res = Math.max(dp1[r][c], res);
        }
    }
    return res;
}
