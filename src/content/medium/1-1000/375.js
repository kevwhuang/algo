// 375 - Guess Number Higher or Lower II

function getMoneyAmount(n) {
    function init() {
        memo = Array.from({ length: 201 }, () => new Uint16Array(201));
        dfs(1, 200);
    }
    function dfs(l, r) {
        if (l >= r) return 0;
        if (memo[l][r]) return memo[l][r];
        let min = Infinity, i = l + r >> 1;
        while (i < r) {
            const max = Math.max(dfs(l, i - 1), dfs(i + 1, r));
            min = Math.min(max + i++, min);
        }
        return memo[l][r] = min;
    }
    if (!this.memo) init();
    return memo[1][n];
}
