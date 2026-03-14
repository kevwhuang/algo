// 3339 - Find the Number of K-Even Arrays

function countOfArrays(n, m, k) {
    function dfs(i, acc, d) {
        if (i === n) return Number(acc === k);
        if (acc > k) return 0;
        const memo = d ? memo1 : memo2;
        if (memo[i][acc] < 2e9) return memo[i][acc];
        const sum = a * dfs(i + 1, acc + d, 1) + b * dfs(i + 1, acc, 0);
        return memo[i][acc] = sum % 1000000007;
    }
    const fn = () => new Uint32Array(k + 1).fill(2e9);
    const memo1 = Array.from({ length: n }, fn);
    const memo2 = Array.from({ length: n }, fn);
    const a = m >> 1, b = m - a;
    return dfs(0, 0, 0);
}
