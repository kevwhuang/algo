// 2439 - Minimize Maximum of Array

function minimizeArrayValue(nums) {
    let max = 0, acc = 0;
    for (let i = 0; i < nums.length; i++) {
        acc += nums[i];
        max = Math.max(Math.ceil(acc / (i + 1)), max);
    }
    return max;
}
