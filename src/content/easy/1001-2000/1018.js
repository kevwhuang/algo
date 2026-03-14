// 1018 - Binary Prefix Divisible by 5

function prefixesDivBy5(nums) {
    for (let i = 0, lsd = 0; i < nums.length; i++) {
        lsd = (2 * lsd + nums[i]) % 10;
        nums[i] = lsd === 0 || lsd === 5;
    }
    return nums;
}
