// 3427 - Sum of Variable Length Subarrays

function subarraySum(nums) {
    let res = 0, r = -1;
    while (++r < nums.length) {
        const l = Math.max(0, r - nums[r]);
        nums[r] += r && nums[r - 1];
        res += nums[r] - (l && nums[l - 1]);
    }
    return res;
}
