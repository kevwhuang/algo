// 219 - Contains Duplicate II

function containsNearbyDuplicate(nums, k) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
        set.delete(nums[i - k]);
    }
    return false;
}
