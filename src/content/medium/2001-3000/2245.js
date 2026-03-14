// 2245 - Maximum Trailing Zeros in a Cornered Path

function maxTrailingZeros(grid) {
    const ps = grid, m = ps.length - 1, n = ps[0].length - 1;
    for (let r = 0; r <= m; r++) {
        for (let c = 0; c <= n; c++) {
            let f2 = 0, f5 = 0, num = grid[r][c];
            while (num % 2 === 0) f2++, num /= 2;
            while (num % 5 === 0) f5++, num /= 5;
            ps[r][c] = [f2, f5, f2, f5];
            if (r) ps[r][c][0] += ps[r - 1][c][0];
            if (r) ps[r][c][1] += ps[r - 1][c][1];
            if (c) ps[r][c][2] += ps[r][c - 1][2];
            if (c) ps[r][c][3] += ps[r][c - 1][3];
        }
    }
    let max = 0, u2, u5, d2, d5, l2, l5, r2, r5;
    for (let r = 0; r <= m; r++) {
        for (let c = 0; c <= n; c++) {
            u2 = ps[r][c][0];
            u5 = ps[r][c][1];
            d2 = ps[m][c][0] - (r && ps[r - 1][c][0]);
            d5 = ps[m][c][1] - (r && ps[r - 1][c][1]);
            l2 = c ? ps[r][c - 1][2] : 0;
            l5 = c ? ps[r][c - 1][3] : 0;
            r2 = ps[r][n][2] - ps[r][c][2];
            r5 = ps[r][n][3] - ps[r][c][3];
            max = Math.max(Math.min(u2 + l2, u5 + l5), max);
            max = Math.max(Math.min(u2 + r2, u5 + r5), max);
            max = Math.max(Math.min(d2 + l2, d5 + l5), max);
            max = Math.max(Math.min(d2 + r2, d5 + r5), max);
        }
    }
    return max;
}
