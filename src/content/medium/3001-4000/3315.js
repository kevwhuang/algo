// 3315 - Construct the Minimum Bitwise Array II

function minBitwiseArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 2 && (nums[i] = -1)) continue;
        let mask = 1;
        while (nums[i] & mask) mask *= 2;
        nums[i] ^= mask / 2;
    }
    return nums;
}
