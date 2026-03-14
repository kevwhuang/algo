// 930 - Binary Subarrays With Sum

function numSubarraysWithSum(nums, goal) {
    let subarrays = 0, count = 0, l = 0, r = -1;
    while (++r < nums.length) {
        if (nums[r]) --goal, count = 0;
        while (l <= r && !goal && ++count) goal += nums[l++];
        while (goal < 0) goal += nums[l++];
        subarrays += count;
    }
    return subarrays;
}
