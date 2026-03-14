// 2970 - Count the Number of Incremovable Subarrays I

function incremovableSubarrayCount(nums) {
    let subarrays = 0;
    const n = nums.length;
    for (let l = 0; l < n; l++) {
        L: for (let r = l; r < n; r++) {
            for (let ll = 1; ll < l; ll++) {
                if (nums[ll - 1] >= nums[ll]) continue L;
            }
            if (l && r + 1 < n && nums[l - 1] >= nums[r + 1]) continue;
            for (let rr = r + 2; rr < n; rr++) {
                if (nums[rr - 1] >= nums[rr]) continue L;
            }
            subarrays++;
        }
    }
    return subarrays;
}
