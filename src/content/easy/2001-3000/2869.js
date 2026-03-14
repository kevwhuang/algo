// 2869 - Minimum Operations to Collect Elements

function minOperations(nums, k) {
    let ops = 0;
    const set = new Set();
    while (set.size < k) {
        const num = nums.pop();
        if (num <= k) set.add(num);
        ops++;
    }
    return ops;
}
