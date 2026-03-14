// 2189 - Number of Ways to Build House of Cards

function houseOfCards(n) {
    const dp = new Uint32Array(n + 1);
    dp[0] = 1;
    for (let i = 2; i <= n; i += 3) {
        for (let j = n; j >= i; j--) {
            dp[j] += dp[j - i];
        }
    }
    return dp[n];
}
