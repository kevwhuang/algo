// 162 - Find Peak Element

function findPeakElement(nums) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        const m = (l + r) / 2 >> 0;
        if (nums[m] <= nums[m + 1]) l = m + 1;
        else r = m;
    }
    return r;
}
