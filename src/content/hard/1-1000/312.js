// 312 - Burst Balloons

function maxCoins(nums) {
    const n = nums.length;
    const dp = Array.from({ length: n + 2 }, () => new Uint32Array(n + 2));
    const arr = new Uint8Array(n + 2);
    arr[0] = arr[n + 1] = 1;
    nums.forEach((e, i) => arr[i + 1] = e);
    for (let r = n; r; r--) {
        for (let c = r; c <= n; c++) {
            let max = 0;
            for (let i = r; i <= c; i++) {
                const prod = arr[r - 1] * arr[i] * arr[c + 1];
                max = Math.max(prod + dp[r][i - 1] + dp[i + 1][c], max);
            }
            dp[r][c] = max;
        }
    }
    return dp[1][n];
}
