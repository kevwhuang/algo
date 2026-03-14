// 1269 - Number of Ways to Stay in the Same Place After Some Steps

function numWays(steps, arrLen) {
    const n = Math.min((steps >> 1) + 1, arrLen);
    let dp1 = new Uint32Array(n + 2).fill(1, 1, 2);
    let dp2 = new Uint32Array(n + 2);
    for (let swap, i = 1; i <= steps; i++) {
        let j = Math.min(i + 1, n) + 1;
        while (--j) dp2[j] = (dp1[j - 1] + dp1[j] + dp1[j + 1]) % 1000000007;
        swap = dp1, dp1 = dp2, dp2 = swap;
    }
    return dp1[1];
}
