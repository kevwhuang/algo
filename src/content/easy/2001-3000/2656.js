// 2656 - Maximum Sum With Exactly K Elements

function maximizeSum(nums, k) {
    const max = Math.max(...nums);
    return (max + (max + k - 1)) * k / 2;
}
