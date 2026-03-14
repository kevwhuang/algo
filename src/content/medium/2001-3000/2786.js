// 2786 - Visit Array Positions to Maximize Score

function maxScore(nums, x) {
    let max1 = nums[0] & 1 ? nums[0] : nums[0] - x;
    let max2 = nums[0] & 1 ? nums[0] - x : nums[0];
    for (let i = 1; i < nums.length; i++) {
        const cur = nums[i];
        if (cur & 1) max1 = Math.max(max2 - x, max1) + cur;
        else max2 = Math.max(max1 - x, max2) + cur;
    }
    return Math.max(max1, max2);
}
