// 1546 - Maximum Number of Non-Overlapping Subarrays With Sum Equals Target

function maxNonOverlapping(nums, target) {
    let subarrays = 0, acc = 0, set = new Set();
    for (let i = 0; i < nums.length; i++) {
        acc += nums[i];
        if (acc === target || set.has(acc - target)) {
            subarrays++, acc = 0, set = new Set();
        } else set.add(acc);
    }
    return subarrays;
}
