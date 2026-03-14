// 2896 - Apply Operations to Make Two Strings Equal

function minOperations(s1, s2, x) {
    const arr = [];
    let acc = 0, i = -1;
    while (++i < s1.length) if (s1[i] !== s2[i] && ++acc) arr.push(i);
    if (acc & 1) return -1;
    const n = arr.length, dp = new Uint16Array(n + 1);
    dp[1] = x, i = 1;
    while (++i <= n) {
        const next = dp[i - 2] + 2 * (arr[i - 1] - arr[i - 2]);
        dp[i] = Math.min(next, dp[i - 1] + x);
    }
    return dp[n] / 2;
}
