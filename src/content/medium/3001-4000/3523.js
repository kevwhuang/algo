// 3523 - Make Array Non-Decreasing

function maximumPossibleSize(nums) {
    let res = 0, max = 0, i = -1;
    while (++i < nums.length) if (nums[i] >= max) res++, max = nums[i];
    return res;
}
