// 915 - Partition Array Into Disjoint Intervals

function partitionDisjoint(nums) {
    let index = 0, max = nums[0], local = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < local) {
            index = i;
            local = max;
        } else {
            max = Math.max(nums[i], max);
        }
    }
    return index + 1;
}
