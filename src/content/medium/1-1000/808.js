// 808 - Soup Servings

function soupServings(n) {
    function dfs(acc1, acc2) {
        if (acc1 <= 0 && acc2 <= 0) return .5;
        if (acc1 <= 0) return 1;
        if (acc2 <= 0) return 0;
        if (memo[acc1][acc2]) return memo[acc1][acc2];
        const a = dfs(acc1 - 4, acc2);
        const b = dfs(acc1 - 3, acc2 - 1);
        const c = dfs(acc1 - 2, acc2 - 2);
        const d = dfs(acc1 - 1, acc2 - 3);
        return memo[acc1][acc2] = .25 * (a + b + c + d);
    }
    if (n > 4300) return 1;
    n = Math.ceil(n / 25);
    const memo = Array.from({ length: n + 1 }, () => new Float32Array(n + 1));
    return dfs(n, n);
}
