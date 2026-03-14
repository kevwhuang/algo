// 764 - Largest Plus Sign

function orderOfLargestPlusSign(n, mines) {
    function check(d, flag) {
        for (let r = 0; r < n; r++) {
            for (let acc = 0, c = ~d ? 0 : n - 1; ~c && c < n; c += d) {
                const a = dp[r][c], b = dp[c][r];
                if (flag) a ? dp[r][c] = min(++acc, a) : acc = 0;
                else b ? dp[c][r] = min(++acc, b) : acc = 0;
            }
        }
    }
    const dp = Array.from({ length: n }, () => new Uint16Array(n).fill(-1));
    mines.forEach(e => dp[e[0]][e[1]] = 0);
    const { min, max } = Math;
    [[-1], [1], [-1, true], [1, true]].forEach(e => check(...e));
    return dp.reduce((s, e) => max(e.reduce((s, e) => max(e, s), 0), s), 0);
}
