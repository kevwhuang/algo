// 4050. Minimum Days to Score Exactly N Points

function minDays(n) {
    function init() {
        dp = new Uint32Array(100001).fill(-1), dp[0] = 0;
        for (let i = 1; i < 100001; i++) {
            for (let acc = 1, d = 1; acc <= i; acc += ++d) {
                dp[i] = Math.min(i > acc ? dp[i - acc] + d + 1 : d, dp[i]);
            }
        }
    }
    if (!this.dp) init();
    return dp[n];
}
