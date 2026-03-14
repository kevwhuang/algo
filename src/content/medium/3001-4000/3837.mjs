// 3837 - Delayed Count of Equal Elements

function delayedCount(nums, k) {
    const res = new Uint32Array(nums.length);
    const B = new Map();
    for (let i = nums.length - 1; ~i; i--) {
        const j = i + k + 1;
        if (j < nums.length) B.set(nums[j], (B.get(nums[j]) ?? 0) + 1);
        res[i] = B.get(nums[i]);
    }
    return res;
}
