// 464 - Can I Win

function canIWin(maxChoosableInteger, desiredTotal) {
    function dfs(mask, acc) {
        if (memo[mask]) return memo[mask];
        if (acc >= desiredTotal) return memo[mask] = 1;
        for (let k = 1, i = 1; i <= n; k <<= 1, i++) {
            if (mask & k) continue;
            if (dfs(mask | k, acc + i) === 1) return memo[mask] = 2;
        }
        return memo[mask] = 1;
    }
    const n = maxChoosableInteger;
    if (n * (n + 1) / 2 < desiredTotal) return false;
    if (desiredTotal === 0) return true;
    const memo = new Uint8Array(1 << n);
    return dfs(0, 0) === 2;
}
