// 2466 - Count Ways to Build Good Strings

function countGoodStrings(low, high, zero, one) {
    const dp = new Uint32Array(high + 1);
    dp[0] = 1;
    let res = 0, i = 0;
    while (++i <= high) {
        if (i >= zero) dp[i] += dp[i - zero];
        if (i >= one) dp[i] += dp[i - one];
        if (i >= low) res = (res + dp[i]) % 1000000007;
        dp[i] %= 1000000007;
    }
    return res;
}
