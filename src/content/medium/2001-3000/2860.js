// 2860 - Happy Students

function countWays(nums) {
    nums.sort((a, b) => a - b);
    let ways = nums[0] ? 1 : 0;
    if (nums[nums.length - 1] < nums.length) ways++;
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] < i && nums[i] > i) ways++;
    }
    return ways;
}
