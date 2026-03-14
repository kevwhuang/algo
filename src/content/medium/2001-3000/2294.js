// 2294 - Partition Array Such That Maximum Difference Is K

function partitionArray(nums, k) {
    nums.sort((a, b) => a - b);
    let subsequences = 0, base;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] - k <= base) continue;
        subsequences++;
        base = nums[i];
    }
    return subsequences;
}
