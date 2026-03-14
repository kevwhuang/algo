// 2184 - Number of Ways to Build Sturdy Brick Wall

function buildWall(height, width, bricks) {
    function dfs(acc, mask) {
        if (acc === width) arr.push(mask);
        if (acc >= width) return;
        if (acc) mask |= 1 << acc;
        bricks.forEach(e => dfs(acc + e, mask));
    }
    const fn = (s, e) => (s + dp[e]) % 1000000007;
    const arr = [];
    dfs(0, 0);
    const M = Array.from({ length: arr.length }, () => []);
    arr.forEach((e, i) => arr.forEach((f, j) => !(e & f) && M[i].push(j)));
    let dp = new Uint32Array(M.length).fill(1);
    let N = new Uint32Array(M.length);
    while (--height) {
        const cur = dp;
        N.forEach((_, i) => N[i] = M[i].reduce(fn, 0));
        dp = N, N = cur.fill(0);
    }
    return dp.reduce((s, e) => (s + e) % 1000000007, 0);
}
