// 2340 - Minimum Adjacent Swaps to Make a Valid Array

function minimumSwaps(nums) {
    let min = [nums[0], 0], max = [nums[0], 0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min[0]) {
            min[0] = nums[i];
            min[1] = i;
        }
        if (nums[i] >= max[0]) {
            max[0] = nums[i];
            max[1] = i;
        }
    }
    if (min[1] > max[1]) max[1]++;
    return min[1] + (nums.length - max[1] - 1);
}
