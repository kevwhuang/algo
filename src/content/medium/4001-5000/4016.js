// 4016. Maximum Area of Two Non-Overlapping Square Submatrices

function maxArea(mat) {
    const dp = mat, m = dp.length, n = dp[0].length;
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < n; y++) {
            if (dp[x][y] === 0) continue;
            const a = x && y ? dp[x - 1][y - 1] : 0;
            const b = x ? dp[x - 1][y] : 0;
            const c = y ? dp[x][y - 1] : 0;
            dp[x][y] = Math.min(a, b, c) + 1;
        }
    }
    let l = 1, r = Math.min(m, n);
    while (l <= r) {
        let min1 = 1e3, min2 = 1e3, max1 = -1, max2 = -1;
        const mm = l + r >> 1;
        for (let x = mm - 1; x < m; x++) {
            for (let y = mm - 1; y < n; y++) {
                if (dp[x][y] < mm) continue;
                min1 = Math.min(x, min1), min2 = Math.min(y, min2);
                max1 = Math.max(x, max1), max2 = Math.max(y, max2);
            }
        }
        if (max1 - min1 >= mm || max2 - min2 >= mm) l = mm + 1;
        else r = mm - 1;
    }
    return r * r;
}
