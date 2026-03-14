// 2341 - Maximum Number of Pairs in Array

function numberOfPairs(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) set.delete(nums[i]);
        else set.add(nums[i]);
    }
    return [(nums.length - set.size) / 2, set.size];
}
