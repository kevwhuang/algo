// 3731 - Find Missing Elements

function findMissingElements(nums) {
    const res = [], set = new Set(nums), max = Math.max(...nums);
    for (let i = Math.min(...nums) + 1; i < max; i++) {
        if (!set.has(i)) res.push(i);
    }
    return res;
}
