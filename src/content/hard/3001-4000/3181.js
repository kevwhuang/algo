// 3181 - Maximum Total Reward Using Operations II

function maxTotalReward(rewardValues) {
    function dfs(acc) {
        if (acc <= 0) return 0;
        if (set.has(acc)) return acc;
        if (memo.has(acc)) return memo.get(acc);
        let l = 0, r = arr.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (arr[m] < acc) l = m + 1;
            else r = m - 1;
        }
        let max = 0;
        for (let i = 0; i < l; i++) {
            const cur = arr[i];
            max = Math.max(cur + dfs(Math.min(acc - cur, cur - 1)), max);
        }
        memo.set(acc, max);
        return max;
    }
    const set = new Set(rewardValues);
    const arr = new Uint16Array(set).sort();
    const memo = new Map();
    return arr.at(-1) + dfs(arr.at(-1) - 1);
}
