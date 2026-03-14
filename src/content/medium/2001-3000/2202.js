// 2202 - Maximize the Topmost Element After K Moves

function maximumTop(nums, k) {
    if (k % 2 && nums.length === 1) return -1;
    if (k > nums.length) return Math.max(...nums);
    let max = 0;
    for (let i = 0; i < k - 1; i++) {
        max = Math.max(nums[i], max);
    }
    return k === nums.length ? max : Math.max(nums[k], max);
}
