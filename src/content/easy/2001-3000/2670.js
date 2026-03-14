// 2670 - Find the Distinct Difference Array

function distinctDifferenceArray(nums) {
    const prefix = new Set(), suffix = new Map();
    for (let i = 0; i < nums.length; i++) {
        suffix.set(nums[i], suffix.get(nums[i]) + 1 || 1);
    }
    const res = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        prefix.add(num);
        const count = suffix.get(num);
        if (count > 1) suffix.set(num, count - 1);
        else if (count === 1) suffix.delete(num);
        res[i] = prefix.size - suffix.size;
    }
    return res;
}
