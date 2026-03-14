// 651 - 4 Keys Keyboard

function maxA(n) {
    function init() {
        dp = Array.from({ length: 51 }, (_, i) => i);
        for (let i = 7; i < 51; i++) {
            for (let j = 3; j < i; j++) {
                dp[i] = Math.max(dp[i - j] * (j - 1), dp[i]);
            }
        }
    }
    if (this.dp === undefined) init();
    return dp[n];
}
