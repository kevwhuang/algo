// 3742 - Maximum Path Score in a Grid

function maxPathScore(grid, k) {
    const m = grid.length, n = grid[0].length;
    let dp1 = Array.from({ length: n }, () => new Int16Array(k + 1).fill(-1));
    let dp2 = Array.from({ length: n }, () => new Int16Array(k + 1).fill(-1));
    dp1[0][0] = 0;
    for (let cur, r = 0; r < m; r++) {
        for (let c = 1; c < n; c++) {
            for (let i = 0; i <= k; i++) {
                const prev = dp1[c - 1][i], cur = grid[r][c], d = cur ? 1 : 0;
                if (prev < 0 || i + d > k) continue;
                dp1[c][i + d] = Math.max(prev + cur, dp1[c][i + d]);
            }
        }
        if (r === m - 1) break;
        for (let c = 0; c < n; c++) {
            for (let i = 0; i <= k; i++) {
                const prev = dp1[c][i], cur = grid[r + 1][c], d = cur ? 1 : 0;
                if (prev < 0 || i + d > k) continue;
                dp2[c][i + d] = Math.max(prev + cur, dp2[c][i + d]);
            }
        }
        cur = dp1, dp1 = dp2, dp2 = cur;
        dp2.forEach(e => e.fill(-1));
    }
    return Math.max(...dp1[n - 1]);
}
