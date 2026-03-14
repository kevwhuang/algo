// 2302 - Count Subarrays With Score Less Than K

function countSubarrays(nums, k) {
    let res = 0, acc = 0, l = 0, r = -1;
    while (++r < nums.length) {
        acc += nums[r];
        while (acc * (r - l + 1) >= k) acc -= nums[l++];
        res += r - l + 1;
    }
    return res;
}
