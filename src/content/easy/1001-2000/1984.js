// 1984 - Minimum Difference Between Highest and Lowest of K Scores

function minimumDifference(nums, k) {
    nums.sort((a, b) => a - b);
    let min = Infinity;
    for (let i = 0; i <= nums.length - k; i++) {
        min = Math.min(nums[i + k - 1] - nums[i], min);
    }
    return min;
}
