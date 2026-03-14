// 174 - Dungeon Game

function calculateMinimumHP(dungeon) {
    const dp = dungeon, m = dp.length, n = dp[0].length;
    for (let r = m - 1; ~r; r--) {
        for (let c = n - 1; ~c; c--) {
            const down = r + 1 < m ? dp[r + 1][c] : -500000;
            const right = c + 1 < n ? dp[r][c + 1] : -500000;
            const max = Math.max(down, right);
            if (down > -500000 || right > -500000) dp[r][c] += max;
            if (dp[r][c] > 0) dp[r][c] = 0;
        }
    }
    return 1 - dp[0][0];
}
