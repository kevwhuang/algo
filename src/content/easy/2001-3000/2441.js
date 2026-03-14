// 2441 - Largest Positive Integer That Exists With Its Negative

function findMaxK(nums) {
    let max = -1;
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        set.add(num);
        if (set.has(-num)) max = Math.max(Math.abs(num), max);
    }
    return max;
}
