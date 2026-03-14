// 2740 - Find the Value of the Partition

function findValueOfPartition(nums) {
    nums.sort((a, b) => a - b);
    let min = Infinity;
    for (let i = 1; i < nums.length; i++) {
        min = Math.min(nums[i] - nums[i - 1], min);
    }
    return min;
}
