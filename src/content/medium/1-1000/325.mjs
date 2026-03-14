// 325 - Maximum Size Subarray Sum Equals K

function maxSubArrayLen(nums, k) {
    let max = 0, running = 0;
    const map = new Map([[0, -1]]);
    for (let i = 0; i < nums.length; i++) {
        running += nums[i];
        if (!map.has(running)) map.set(running, i);
        const diff = running - k;
        if (map.has(diff)) max = Math.max(i - map.get(diff), max);
    }
    return max;
}
