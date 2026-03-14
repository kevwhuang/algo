// 3040 - Maximum Number of Operations With the Same Score II

function maxOperations(nums) {
    function dfs(l, r, tgt) {
        if (l >= r) return 0;
        if (memo[l][r]) return memo[l][r];
        const a = nums[l] + nums[l + 1];
        const pathA = !tgt || tgt === a ? 1 + dfs(l + 2, r, a) : 0;
        const b = nums[l] + nums[r];
        const pathB = !tgt || tgt === b ? 1 + dfs(l + 1, r - 1, b) : 0;
        const c = nums[r - 1] + nums[r];
        const pathC = !tgt || tgt === c ? 1 + dfs(l, r - 2, c) : 0;
        return memo[l][r] = Math.max(pathA, pathB, pathC);
    }
    const n = nums.length;
    const memo = Array.from({ length: n }, () => new Uint8Array(n));
    return dfs(0, n - 1);
}
