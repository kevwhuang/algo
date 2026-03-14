// 2974 - Minimum Number Game

function numberGame(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 2) {
        const swap = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = swap;
    }
    return nums;
}
