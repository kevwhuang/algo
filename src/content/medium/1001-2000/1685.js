// 1685 - Sum of Absolute Differences in a Sorted Array

function getSumAbsoluteDifferences(nums) {
    let leftSum = 0, rightSum = nums.reduce((s, n) => s + n);
    for (let i = 0, len = nums.length; i < len; i++) {
        const n = nums[i];
        rightSum -= n;
        nums[i] = n * (i + i + 1 - len) + rightSum - leftSum;
        leftSum += n;
    }
    return nums;
}
