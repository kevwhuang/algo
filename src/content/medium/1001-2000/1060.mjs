// 1060 - Missing Element in Sorted Array

function missingElement(nums, k) {
    const sum = nums[0] + k;
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const m = ~~((l + r) / 2);
        if (nums[m] < sum + m) l = m + 1;
        else r = m - 1;
    }
    return sum + l - 1;
}
