// 918 - Maximum Sum Circular Subarray

function maxSubarraySumCircular(nums) {
    let sum = 0, maxSum = nums[0], minSum = nums[0];
    let max = -Infinity, min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        sum += num;
        max = Math.max(num, num + max);
        maxSum = Math.max(max, maxSum);
        min = Math.min(num, num + min);
        minSum = Math.min(min, minSum);
    }
    return maxSum > 0 ? Math.max(maxSum, sum - minSum) : maxSum;
}
