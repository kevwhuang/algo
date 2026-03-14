// 3701 - Compute Alternating Sum

function alternatingSum(nums) {
    let res = 0, i = -1;
    while (++i < nums.length) res += i & 1 ? -nums[i] : nums[i];
    return res;
}
