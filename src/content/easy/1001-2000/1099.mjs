// 1099 - Two Sum Less Than K

function twoSumLessThanK(nums, k) {
    nums = new Uint16Array(nums).sort();
    let max = -1, l = 0, r = nums.length - 1;
    while (l < r) {
        const sum = nums[l] + nums[r];
        if (sum < k && ++l) max = Math.max(sum, max);
        else r--;
    }
    return max;
}
