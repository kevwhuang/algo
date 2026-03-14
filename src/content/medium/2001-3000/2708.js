// 2708 - Maximum Strength of a Group

function maxStrength(nums) {
    nums = new Int8Array(nums).sort();
    if (nums.length === 1) return nums[0];
    if (nums.at(-1) === 0 && nums.indexOf(0) <= 1) return 0;
    let strength = 1, i = nums.length - 1;
    while (~i && nums[i] > 0) strength *= nums[i--];
    i = 0;
    while (i + 1 < nums.length && nums[i + 1] < 0) {
        strength *= nums[i++] * nums[i++];
    }
    return strength;
}
