// 2295 - Replace Elements in an Array

function arrayChange(nums, operations) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i < operations.length; i++) {
        const n1 = operations[i][0];
        const n2 = operations[i][1];
        const index = map.get(n1);
        nums[index] = n2;
        map.set(n2, index);
        map.delete(n1);
    }
    return nums;
}
