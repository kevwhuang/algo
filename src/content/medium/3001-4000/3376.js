// 3376 - Minimum Time to Break Locks I

function findMinimumTime(strength, K) {
    const dp = new Uint32Array(1 << strength.length).fill(-1);
    dp[0] = 0;
    for (let mask = 0; mask < dp.length; mask++) {
        let acc = 1, num = mask;
        while (num) {
            if (num & 1) acc += K;
            num >>= 1;
        }
        for (let i = 0; i < strength.length; i++) {
            if (mask & 1 << i) continue;
            const next = dp[mask] + Math.ceil(strength[i] / acc);
            dp[mask | 1 << i] = Math.min(next, dp[mask | 1 << i]);
        }
    }
    return dp.at(-1);
}
