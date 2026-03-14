// 2980 - Check If Bitwise OR Has Trailing Zeros

function hasTrailingZeros(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] & 1) continue;
        if (++count === 2) return true;
    }
    return false;
}
