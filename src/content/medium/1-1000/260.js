// 260 - Single Number III

function singleNumber(nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }
    const mask = xor & -xor;
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] & mask) num ^= nums[i];
    }
    return [num, num ^ xor];
}
