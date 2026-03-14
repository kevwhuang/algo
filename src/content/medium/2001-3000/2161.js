// 2161 - Partition Array According to Given Pivot

function pivotArray(nums, pivot) {
    const before = [], same = [], after = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) before.push(nums[i]);
        else if (nums[i] > pivot) after.push(nums[i]);
        else same.push(pivot);
    }
    return before.concat(same).concat(after);
}
