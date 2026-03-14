// 594 - Longest Harmonious Subsequence

function findLHS(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
    let max = 0;
    for (const e of map) {
        if (!map.has(e[0] + 1)) continue;
        max = Math.max(e[1] + map.get(e[0] + 1), max);
    }
    return max;
}
