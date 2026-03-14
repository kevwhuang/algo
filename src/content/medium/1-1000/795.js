// 795 - Number of Subarrays With Bounded Maximum

function numSubarrayBoundedMax(nums, left, right) {
    let subarrays = 0, window = 0;
    for (let l = 0, r = 0; r < nums.length; r++) {
        if (left <= nums[r] && nums[r] <= right) {
            window = r - l + 1;
        } else if (nums[r] > right) {
            window = 0;
            l = r + 1;
        }
        subarrays += window;
    }
    return subarrays;
}
