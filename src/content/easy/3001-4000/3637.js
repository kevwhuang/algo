// 3637 - Trionic Array I

function isTrionic(nums) {
    const n = nums.length;
    let l = 0;
    while (l + 1 < n && nums[l] < nums[l + 1]) l++;
    if (l === 0 || l === n - 1) return false;
    let r = l;
    while (r + 1 < n && nums[r] > nums[r + 1]) r++;
    if (r === l || r === n - 1) return false;
    while (r + 1 < n && nums[r] < nums[r + 1]) r++;
    return r === n - 1;
}
