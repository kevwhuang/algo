// 3865 - Reverse K Subarrays

function reverseSubarrays(nums, k) {
    k = nums.length / k;
    for (let swap, i = 0; i < nums.length; i += k) {
        let l = i, r = l + k - 1;
        while (l < r) swap = nums[l], nums[l++] = nums[r], nums[r--] = swap;
    }
    return nums;
}
