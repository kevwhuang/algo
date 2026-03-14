// 33 - Search in Rotated Sorted Array

function search(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const m = l + r >> 1;
        if (nums[m] === target) return m;
        if (nums[l] <= nums[m]) {
            if (nums[l] > target) l = m + 1;
            else if (nums[m] < target) l = m + 1;
            else r = m - 1;
        } else {
            if (nums[m] > target) r = m - 1;
            else if (nums[r] < target) r = m - 1;
            else l = m + 1;
        }
    }
    return -1;
}
