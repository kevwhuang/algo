// 1626 - Best Team With No Conflicts

function bestTeamScore(scores, ages) {
    let res = 0;
    const M = ages.map((e, i) => [e, scores[i]]);
    M.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const dp = scores.fill(0);
    for (let i = 0; i < dp.length; i++) {
        const cur = M[i][1];
        for (let j = i; ~j; j--) {
            if (M[j][1] <= cur) dp[i] = Math.max(dp[j] + cur, dp[i]);
        }
        res = Math.max(dp[i], res);
    }
    return res;
}
