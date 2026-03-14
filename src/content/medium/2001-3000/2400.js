// 2400 - Number of Ways to Reach a Position After Exactly K Steps

function numberOfWays(startPos, endPos, k) {
    function init() {
        dp = new Array(1001), dp[0] = [1];
        for (let i = 1; i < 1001; i++) {
            const prev = dp[i - 1], n = prev.length;
            const cur = dp[i] = new Uint32Array(n + 2);
            for (let j = 0; j < n; j++) {
                cur[j] = (cur[j] + prev[j]) % 1000000007;
                cur[j + 2] = prev[j];
            }
        }
    }
    if (this.dp === undefined) init();
    const abs = Math.abs(startPos - endPos);
    return abs <= k ? dp[k][k + abs] : 0;
}
