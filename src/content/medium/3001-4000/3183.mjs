// 3183 - The Number of Ways to Make the Sum

function numberOfWays(n) {
    function init() {
        dp = new Uint32Array(100001);
        dp[0] = dp[1] = 1;
        for (let i = 2; i < 100001; i++) {
            dp[i] = dp[i - 2] + 1;
        }
        for (let i = 6; i < 100001; i++) {
            dp[i] += dp[i - 6];
        }
    }
    if (this.dp === undefined) init();
    return (dp[n] + (n > 3 && dp[n - 4]) + (n > 7 && dp[n - 8])) % 1000000007;
}
