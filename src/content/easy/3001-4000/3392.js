// 3392 - Count Subarrays of Length Three With a Condition

function countSubarrays(nums) {
    let res = 0;
    for (let i = 2; i < nums.length; i++) {
        const sum = nums[i - 2] + nums[i];
        if (2 * sum === nums[i - 1]) res++;
    }
    return res;
}
