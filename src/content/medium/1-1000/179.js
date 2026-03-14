// 179 - Largest Number

function largestNumber(nums) {
    nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
    return nums[0] === 0 ? '0' : nums.join('');
}
