// 1800 - Maximum Ascending Subarray Sum

function maxAscendingSum(nums) {
    let max = nums[0], acc = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) acc += nums[i];
        else max = Math.max(acc, max), acc = nums[i];
    }
    return Math.max(max, acc);
}
