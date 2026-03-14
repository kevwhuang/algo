// 1121 - Divide Array Into Increasing Sequences

function canDivideIntoSubsequences(nums, k) {
    const map = new Map(), n = nums.length;
    let max = 1, i = -1;
    while (++i < n) {
        const next = (map.get(nums[i]) ?? 0) + 1;
        map.set(nums[i], next);
        max = Math.max(next, max);
        if (k * max > n) return false;
    }
    return true;
}
