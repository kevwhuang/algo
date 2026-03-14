// 2875 - Minimum Size Subarray in Infinite Array

function minSizeSubarray(nums, target) {
    const sum = nums.reduce((s, e) => s + e);
    const reps = target / sum >> 0;
    target %= sum;
    let min = Infinity, acc = 0;
    const len = nums.length, bound = 2 * len;
    for (let l = 0, r = 0; r < bound; r++) {
        acc += nums[r % len];
        while (l <= r && acc > target) acc -= nums[l++ % len];
        if (acc === target) min = Math.min(r - l + 1, min);
    }
    return min === Infinity ? -1 : min + reps * len;
}
