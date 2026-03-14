// 1043 - Partition Array for Maximum Sum

function maxSumAfterPartitioning(arr, k) {
    const dp = new Array(arr.length + 1);
    dp[0] = 0;
    for (let i = 0; i < arr.length; i++) {
        let max = 0, maxSum = 0;
        for (let j = 0; j <= i && j < k; j++) {
            max = Math.max(arr[i - j], max);
            maxSum = Math.max(dp[i - j] + max * (j + 1), maxSum);
        }
        dp[i + 1] = maxSum;
    }
    return dp.at(-1);
}
