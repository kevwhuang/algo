// 2640 - Find the Score of All Prefixes of an Array

function findPrefixScore(nums) {
    for (let i = 0, max = 0, sum = 0; i < nums.length; i++) {
        max = Math.max(nums[i], max);
        sum += nums[i] + max;
        nums[i] = sum;
    }
    return nums;
}
