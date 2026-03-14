// 837 - New 21 Game

function new21Game(n, k, maxPts) {
    if (k === 0 || n >= k + maxPts) return 1;
    const dp = new Float32Array(n + 1);
    dp[0] = 1;
    let res = 0, acc = 1, i = 0;
    while (++i <= n) {
        dp[i] = acc / maxPts;
        if (i < k) acc += dp[i];
        else res += dp[i];
        if (i >= maxPts) acc -= dp[i - maxPts];
    }
    return res;
}
