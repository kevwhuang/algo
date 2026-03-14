// 3332 - Maximum Points Tourist Can Earn

function maxScore(n, k, stayScore, travelScore) {
    let dp = new Uint8Array(n);
    for (let i = 0; i < k; i++) {
        const N = new Uint16Array(n), arr = stayScore[i];
        for (let j = 0; j < n; j++) {
            N[j] = dp[j] + arr[j];
        }
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                N[j] = Math.max(dp[k] + travelScore[k][j], N[j]);
            }
        }
        dp = N;
    }
    return dp.reduce((s, e) => Math.max(e, s));
}
