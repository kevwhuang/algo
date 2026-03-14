// 2856 - Minimum Array Length After Pair Removals

function minLengthAfterRemovals(nums) {
    const n = nums.length, half = n / 2 >> 0;
    let l = 0, r = half;
    while (l < half && r < n) if (nums[l] < nums[r++]) l++;
    return n - l - l;
}
