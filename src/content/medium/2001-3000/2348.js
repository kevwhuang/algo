// 2348 - Number of Zero-Filled Subarrays

function zeroFilledSubarray(nums) {
    let subarrays = 0;
    for (let i = 0, len = 0; i < nums.length; i++) {
        if (nums[i] === 0) subarrays += ++len;
        else len = 0;
    }
    return subarrays;
}
