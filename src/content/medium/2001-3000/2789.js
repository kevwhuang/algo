// 2789 - Largest Element in an Array After Merge Operations

function maxArrayValue(nums) {
    let max = 1, i = nums.length - 1;
    while (~i) {
        let acc = nums[i];
        while (i && nums[i - 1] <= acc) acc += nums[i-- - 1];
        if (acc === nums[i]) i--;
        max = Math.max(acc, max);
    }
    return max;
}
