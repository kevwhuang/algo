// 3309 - Maximum Possible Number by Binary Concatenation

function maxGoodNumber(nums) {
    const a = nums[0].toString(2);
    const b = nums[1].toString(2);
    const c = nums[2].toString(2);
    let max = parseInt(a + b + c, 2);
    max = Math.max(parseInt(a + c + b, 2), max);
    max = Math.max(parseInt(b + a + c, 2), max);
    max = Math.max(parseInt(b + c + a, 2), max);
    max = Math.max(parseInt(c + a + b, 2), max);
    max = Math.max(parseInt(c + b + a, 2), max);
    return max;
}
