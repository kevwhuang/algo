// 2871 - Split Array Into Maximum Number of Subarrays

function maxSubarrays(nums) {
    let subarrays = 0;
    for (let i = 0; i < nums.length; i++) {
        let and = nums[i];
        while (and && ++i < nums.length) and &= nums[i];
        if (and === 0) subarrays++;
    }
    return Math.max(1, subarrays);
}
