// 1690 - Stone Game VII

function stoneGameVII(stones) {
    const n = stones.length, dp = new Uint32Array(n);
    for (let i = 0; i < n; i++) {
        let acc = stones[i], j = i;
        while (~--j) {
            acc += stones[j];
            const a = acc - stones[i] - dp[j];
            const b = acc - stones[j] - dp[j + 1];
            dp[j] = Math.max(a, b);
        }
    }
    return dp[0];
}
