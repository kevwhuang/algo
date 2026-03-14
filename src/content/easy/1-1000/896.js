// 896 - Monotonic Array

function isMonotonic(nums) {
    let hasIncreased = false, hasDecreased = false;
    for (let i = 1; i < nums.length; i++) {
        const diff = nums[i] - nums[i - 1];
        if (diff > 0) hasIncreased = true;
        else if (diff < 0) hasDecreased = true;
        if (hasIncreased && hasDecreased) return false;
    }
    return true;
}
