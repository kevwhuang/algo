// 1235 - Maximum Profit in Job Scheduling

function jobScheduling(startTime, endTime, profit) {
    const n = profit.length;
    const dp = new Uint32Array(n + 1);
    const arr = new Uint16Array(n);
    arr.forEach((_, i) => arr[i] = i);
    arr.sort((a, b) => startTime[a] - startTime[b]);
    for (let i = n - 1; ~i; i--) {
        const tgt = endTime[arr[i]];
        let l = i + 1, r = n - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (startTime[arr[m]] < tgt) l = m + 1;
            else r = m - 1;
        }
        dp[i] = Math.max(dp[i + 1], dp[l] + profit[arr[i]]);
    }
    return dp[0];
}
