// 3314 - Construct the Minimum Bitwise Array I

function minBitwiseArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 2 && (nums[i] = -1)) continue;
        let mask = 1;
        while (nums[i] & mask) mask *= 2;
        nums[i] ^= mask / 2;
    }
    return nums;
}
