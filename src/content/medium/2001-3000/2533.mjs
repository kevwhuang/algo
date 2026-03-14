// 2533 - Number of Good Binary Strings

function goodBinaryStrings(minLength, maxLength, oneGroup, zeroGroup) {
    const dp = new Uint32Array(maxLength + 1);
    dp[0] = 1;
    let res = 0, i = 0;
    while (++i <= maxLength) {
        if (i >= zeroGroup) dp[i] += dp[i - zeroGroup];
        if (i >= oneGroup) dp[i] += dp[i - oneGroup];
        if (i >= minLength) res = (res + dp[i]) % 1000000007;
        dp[i] %= 1000000007;
    }
    return res;
}
