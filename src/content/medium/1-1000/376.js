// 376 - Wiggle Subsequence

function wiggleMaxLength(nums) {
    let res = 1, sign = 0, i = 0;
    while (++i < nums.length) {
        if (nums[i - 1] < nums[i] && sign !== 1) res++, sign = 1;
        else if (nums[i - 1] > nums[i] && sign !== -1) res++, sign = -1;
    }
    return res;
}
