// 3264 - Final Array State After K Multiplication Operations I

function getFinalState(nums, k, multiplier) {
    while (k--) {
        let idx = 0, i = 0;
        while (++i < nums.length) {
            if (nums[i] < nums[idx]) idx = i;
        }
        nums[idx] *= multiplier;
    }
    return nums;
}
