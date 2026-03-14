// 2870 - Minimum Number of Operations to Make Array Empty

function minOperations(nums) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
    let ops = 0;
    for (const freq of map.values()) {
        if (freq === 1) return -1;
        ops += Math.ceil(freq / 3);
    }
    return ops;
}
