// 1140 - Stone Game II

function stoneGameII(piles) {
    function dfs(i, j) {
        if (i >= n) return 0;
        if (memo[i][j]) return memo[i][j];
        let max = 0, k = 0;
        const min = Math.min(n - i, j + j);
        while (++k <= min) {
            max = Math.max(piles[i] - dfs(i + k, Math.max(j, k)), max);
        }
        return memo[i][j] = max;
    }
    for (let i = piles.length - 2; ~i; i--) {
        piles[i] += piles[i + 1];
    }
    const n = piles.length;
    const memo = Array.from({ length: n }, () => new Uint32Array(n + 1));
    return dfs(0, 1);
}
