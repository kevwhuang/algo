// 1664 - Ways to Make a Fair Array

function waysToMakeFair(nums) {
    const right = [0, 0];
    for (let i = 0; i < nums.length; i++) {
        right[i % 2] += nums[i];
    }
    let count = 0;
    const left = [0, 0];
    for (let i = 0; i < nums.length; i++) {
        right[i % 2] -= nums[i];
        if (left[0] + right[1] === left[1] + right[0]) count++;
        left[i % 2] += nums[i];
    }
    return count;
}
