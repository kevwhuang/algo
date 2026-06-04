// 3942. Minimum Operations to Sort a Permutation

function minOperations(nums) {
    const n = nums.length - 1;
    if (n === 0) return 0;
    let d = nums[1] - nums[0], l = 0;
    if (Math.abs(d) === 1) while (l < n && nums[l + 1] - nums[l] === d) l++;
    if (l === n) return d === 1 ? 0 : 1;
    let r = l + 1;
    if (l && r < n && nums[r + 1] - nums[r] !== d) return -1;
    if (r < n) d = nums[r + 1] - nums[r];
    while (r < n && nums[r + 1] - nums[r] === d) r++;
    return r < n ? -1 : Math.min((d !== 1) + l + 1, (d === 1) + n - l + 1);
}
