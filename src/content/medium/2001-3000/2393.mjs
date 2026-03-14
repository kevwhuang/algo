// 2393 - Count Strictly Increasing Subarrays

function countSubarrays(nums) {
    let subarrays = 1, window = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) window++;
        else window = 1;
        subarrays += window;
    }
    return subarrays;
}
