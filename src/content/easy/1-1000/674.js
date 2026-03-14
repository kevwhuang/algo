// 674 - Longest Continuous Increasing Subsequence

function findLengthOfLCIS(nums) {
    let cur = 1, max = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            cur++;
        } else {
            max = Math.max(cur, max);
            cur = 1;
        }
    }
    return Math.max(cur, max);
}
