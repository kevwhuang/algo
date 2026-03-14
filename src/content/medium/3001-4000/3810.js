// 3810 - Minimum Operations to Reach Target Array

function minOperations(nums, target) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== target[i]) set.add(nums[i]);
    }
    return set.size;
}
