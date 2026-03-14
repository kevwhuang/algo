// 2327 - Number of People Aware of a Secret

function peopleAwareOfSecret(n, delay, forget) {
    const dp = new Uint32Array(n);
    dp[0] = 1;
    const mod = 1000000007;
    for (let acc = 0, i = 1; i < n; i++) {
        const a = i >= delay ? dp[i - delay] : 0;
        const b = i >= forget ? dp[i - forget] : 0;
        dp[i] = acc = (acc + a - b + mod) % mod;
    }
    let res = 0;
    for (let i = n - forget; i < n; i++) {
        res = (res + dp[i]) % mod;
    }
    return res;
}
