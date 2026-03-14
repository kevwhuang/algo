// 3130 - Find All Possible Stable Binary Arrays II

function numberOfStableArrays(zero, one, limit) {
    function init() {
        dp0 = Array.from({ length: 1001 }, () => new Uint32Array(1001));
        dp1 = Array.from({ length: 1001 }, () => new Uint32Array(1001));
    }
    if (!this.dp0) init();
    limit++;
    for (let i = 0; i <= zero; i++) {
        dp0[i][0] = i < limit, dp1[i][0] = 0;
    }
    for (let j = 0; j <= one; j++) {
        dp0[0][j] = 0, dp1[0][j] = j < limit;
    }
    const mod = 1000000007;
    for (let i = 1; i <= zero; i++) {
        for (let j = 1; j <= one; j++) {
            dp0[i][j] = (dp0[i - 1][j] + dp1[i - 1][j]) % mod;
            dp1[i][j] = (dp0[i][j - 1] + dp1[i][j - 1]) % mod;
            const ii = i - limit, jj = j - limit;
            if (ii >= 0) dp0[i][j] = (dp0[i][j] - dp1[ii][j] + mod) % mod;
            if (jj >= 0) dp1[i][j] = (dp1[i][j] - dp0[i][jj] + mod) % mod;
        }
    }
    return (dp0[zero][one] + dp1[zero][one]) % mod;
}
