// 2741 - Special Permutations

function specialPerm(nums) {
    function dfs(i, mask) {
        if (mask === tgt) return 1;
        if (memo[i][mask] !== undefined) return memo[i][mask];
        let acc = 0, j = -1;
        while (++j < n) {
            if (mask & dict[j]) continue;
            if (nums[i] % nums[j] && nums[j] % nums[i]) continue;
            acc = (acc + dfs(j, mask | dict[j])) % mod;
        }
        return memo[i][mask] = acc;
    }
    const n = nums.length, mod = 1000000007;
    const dict = Array.from({ length: n }, (_, i) => 1 << i);
    const tgt = dict.reduce((s, e) => s | e);
    const memo = Array.from({ length: n }, () => new Array(tgt));
    return nums.reduce((s, _, i) => (s + dfs(i, dict[i])) % mod, 0);
}
