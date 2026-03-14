// 2320 - Count Number of Ways to Place Houses

function countHousePlacements(n) {
    function init() {
        dp = new Uint32Array(10001), dp[0] = 1, dp[1] = 2;
        for (let i = 2; i < 10001; i++) {
            dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
        }
    }
    if (this.dp === undefined) init();
    return Number(BigInt(dp[n]) ** 2n % 1000000007n);
}
