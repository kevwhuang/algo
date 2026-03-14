// 799 - Champagne Tower

function champagneTower(poured, query_row, query_glass) {
    const fn = (_, i) => new Float32Array(i + 1);
    const dp = Array.from({ length: query_row + 1 }, fn);
    dp[0][0] = poured;
    for (let i = 1; i <= query_row; i++) {
        for (let j = 0; j < i; j++) {
            const prev = (dp[i - 1][j] - 1) / 2;
            if (prev <= 0) continue;
            dp[i][j] += prev;
            dp[i][j + 1] += prev;
        }
    }
    return Math.min(1, dp[query_row][query_glass]);
}
