// 1793 - Maximum Score of a Good Subarray

function maximumScore(nums, k) {
    let res = nums[k], min = nums[k], l = k, r = k;
    const n = nums.length - 1;
    while (l || r < n) {
        if (l === 0) r++;
        else if (r === n) l--;
        else if (nums[l - 1] < nums[r + 1]) r++;
        else l--;
        min = Math.min(nums[l], nums[r], min);
        res = Math.max((r - l + 1) * min, res);
    }
    return res;
}
