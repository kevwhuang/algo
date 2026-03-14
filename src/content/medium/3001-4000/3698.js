// 3698 - Split Array With Minimum Difference

function splitArray(nums) {
    let acc1 = nums[0], acc2 = nums.at(-1), i = 0, j = nums.length - 1;
    while (i + 1 < nums.length && nums[i] < nums[i + 1]) acc1 += nums[++i];
    while (j && nums[j - 1] > nums[j]) acc2 += nums[--j];
    if (i + 1 < j) return -1;
    const fn = Math.abs, d = acc1 - acc2;
    return i + 1 > j ? Math.min(fn(d + nums[i]), fn(d - nums[i])) : fn(d);
}
