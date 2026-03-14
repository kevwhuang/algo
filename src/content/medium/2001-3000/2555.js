// 2555 - Maximize Win From Two Segments

function maximizeWin(prizePositions, k) {
    let max = 0;
    const dp = new Uint16Array(prizePositions.length);
    for (let l = 0, r = 0; r < prizePositions.length; r++) {
        while (prizePositions[l] + k < prizePositions[r]) l++;
        dp[r + 1] = Math.max(dp[r], r - l + 1);
        max = Math.max(dp[l] + r - l + 1, max);
    }
    return max;
}
