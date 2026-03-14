// 1049 - Last Stone Weight II

function lastStoneWeightII(stones) {
    const sum = stones.reduce((s, e) => s + e);
    const n = sum >> 1;
    const dp = new Uint16Array(n + 1);
    for (let i = 0; i < stones.length; i++) {
        for (let j = n; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j - stones[i]] + stones[i], dp[j]);
        }
    }
    return sum - 2 * dp[n];
}
