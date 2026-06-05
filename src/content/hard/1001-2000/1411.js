// 1411. Number of Ways to Paint Nx3 Grid

function numOfWays(n) {
    let dp1 = 6, dp2 = 6;
    const mod = 1e9 + 7;
    while (--n) {
        const next1 = (3 * dp1 + 2 * dp2) % mod;
        const next2 = (2 * dp1 + 2 * dp2) % mod;
        dp1 = next1, dp2 = next2;
    }
    return (dp1 + dp2) % mod;
}
