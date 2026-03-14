// 423 - Reconstruct Original Digits From English

function originalDigits(s) {
    const chars = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        chars[s.charCodeAt(i) - 97]++;
    }
    const nums = new Array(10).fill(0);
    nums[0] = chars[25];
    nums[2] = chars[22];
    nums[4] = chars[20];
    nums[6] = chars[23];
    nums[8] = chars[6];
    nums[3] = chars[7] - nums[8];
    nums[5] = chars[5] - nums[4];
    nums[7] = chars[21] - nums[5];
    nums[1] = chars[14] - nums[0] - nums[2] - nums[4];
    nums[9] = chars[8] - nums[5] - nums[6] - nums[8];
    return nums.reduce((s, e, i) => s + String(i).repeat(e), '');
}
