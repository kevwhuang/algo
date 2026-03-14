// 2357 - Make Array Zero by Subtracting Equal Amounts

function minimumOperations(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) set.add(nums[i]);
    }
    return set.size;
}
