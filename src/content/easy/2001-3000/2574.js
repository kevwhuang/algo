// 2574 - Left and Right Sum Differences

function leftRightDifference(nums) {
    let leftSum = 0, rightSum = nums.reduce((s, num) => s + num);
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        rightSum -= cur;
        nums[i] = Math.abs(leftSum - rightSum);
        leftSum += cur;
    }
    return nums;
}
