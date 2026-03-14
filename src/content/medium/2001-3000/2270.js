// 2270 - Number of Ways to Split Array

function waysToSplitArray(nums) {
    let splits = 0, leftSum = 0;
    let rightSum = nums.reduce((s, e) => s + e);
    const bound = nums.length - 1;
    for (let i = 0; i < bound; i++) {
        leftSum += nums[i];
        rightSum -= nums[i];
        if (leftSum >= rightSum) splits++;
    }
    return splits;
}
