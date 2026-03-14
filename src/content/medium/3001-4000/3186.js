// 3186 - Maximum Total Damage With Spell Casting

function maximumTotalDamage(power) {
    const B = new Map();
    power.forEach(e => B.set(e, (B.get(e) ?? 0) + 1));
    const arr = new Uint32Array(B.keys()).sort();
    const n = B.size, dp = new Array(n);
    dp[0] = arr[0] * B.get(arr[0]);
    for (let i = 1; i < n; i++) {
        const cur = arr[i], prod = cur * B.get(cur);
        let j = i - 1;
        if (~j && arr[j] === cur - 1) j--;
        if (~j && arr[j] === cur - 2) j--;
        dp[i] = Math.max(dp[i - 1], ~j ? dp[j] + prod : prod);
    }
    return dp[n - 1];
}
