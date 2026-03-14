// 813 - Largest Sum of Averages

function largestSumOfAverages(nums, k) {
    const ps = nums, n = ps.length;
    const dp = Array.from({ length: k }, () => new Float64Array(n));
    for (let i = 0; i < n; i++) {
        ps[i] += i ? ps[i - 1] : 0;
        dp[0][i] = ps[i] / (i + 1);
    }
    for (let i = 1; i < k; i++) {
        for (let r = i; r < n; r++) {
            for (let l = 0; l < r; l++) {
                const div = (ps[r] - ps[l]) / (r - l);
                dp[i][r] = Math.max(dp[i - 1][l] + div, dp[i][r]);
            }
        }
    }
    return dp[k - 1][n - 1];
}
