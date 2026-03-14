// 3122 - Minimum Number of Operations to Satisfy Conditions

function minimumOperations(grid) {
    let res = 0, min, idx;
    const dp = new Array(10), m = grid.length, n = grid[0].length;
    for (let c = 0; c < n; c++) {
        for (let i = 0; i < 10; i++) {
            dp[i] = (i === idx ? min : res) + m;
        }
        for (let r = 0; r < m; r++) {
            dp[grid[r][c]]--;
        }
        res = min = Infinity;
        for (let i = 0; i < 10; i++) {
            if (dp[i] < res) min = res, res = dp[i], idx = i;
            else min = Math.min(dp[i], min);
        }
    }
    return res;
}
