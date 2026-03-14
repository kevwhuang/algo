// 2453 - Destroy Sequential Targets

function destroyTargets(nums, space) {
    let max = 0;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const mod = nums[i] % space;
        const freq = (map.get(mod) ?? 0) + 1;
        if (freq > max) max = freq;
        map.set(mod, freq);
    }
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i] % space) !== max) continue;
        min = Math.min(nums[i], min);
    }
    return min;
}
