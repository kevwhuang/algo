// 3882. Minimum XOR Path in a Grid

function minCost(grid) {
    if (!this.dp) dp = new Uint8Array(1024000);
    const M = grid, m = M.length, n = M[0].length;
    dp.fill(0, 0, 1024 * m * n);
    dp[M[0][0]] = 1;
    for (let x = 1; x < m; x++) {
        const a = 1024 * n * (x - 1), b = 1024 * n * x, cur = M[x][0];
        for (let bit = 0; bit < 1024; bit++) {
            if (dp[a + bit]) dp[b + bit ^ cur] = 1;
        }
    }
    for (let y = 1; y < n; y++) {
        const a = 1024 * (y - 1), b = 1024 * y, cur = M[0][y];
        for (let bit = 0; bit < 1024; bit++) {
            if (dp[a + bit]) dp[b + bit ^ cur] = 1;
        }
    }
    for (let x = 1; x < m; x++) {
        for (let y = 1; y < n; y++) {
            const id = n * x + y, cur = M[x][y];
            const a = 1024 * (id - n), b = 1024 * (id - 1), c = 1024 * id;
            for (let bit = 0; bit < 1024; bit++) {
                if (dp[a + bit] || dp[b + bit]) dp[c + bit ^ cur] = 1;
            }
        }
    }
    const a = 1024 * (m * n - 1);
    for (let bit = 0; bit < 1024; bit++) {
        if (dp[a + bit]) return bit;
    }
}
