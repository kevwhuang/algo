// 1413 - Minimum Value to Get Positive Step by Step Sum

function minStartValue(nums) {
    let min = Infinity, sum = 0, i = -1;
    while (++i < nums.length) sum += nums[i], min = Math.min(sum, min);
    return min < 1 ? 1 - min : 1;
}
