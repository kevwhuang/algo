// 1658 - Minimum Operations to Reduce X to Zero

function minOperations(nums, x) {
    let running = 0, max = -Infinity;
    const target = nums.reduce((s, e) => s + e) - x;
    for (let l = 0, r = 0; r < nums.length; r++) {
        running += nums[r];
        while (l <= r && running > target) running -= nums[l++];
        if (running === target) max = Math.max(r - l + 1, max);
    }
    return max === -Infinity ? -1 : nums.length - max;
}
