// 2787 - Ways to Express an Integer as Sum of Powers

function numberOfWays(n, x) {
    const dp = new Uint32Array(n + 1);
    dp[0] = 1;
    for (let i = 1; i ** x <= n; i++) {
        const pow = i ** x;
        for (let j = n; j >= pow; j--) {
            dp[j] = (dp[j] + dp[j - pow]) % 1000000007;
        }
    }
    return dp[n];
}
