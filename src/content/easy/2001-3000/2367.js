// 2367 - Number of Arithmetic Triplets

function arithmeticTriplets(nums, diff) {
    let count = 0;
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
        if (set.has(nums[i] - diff) && set.has(nums[i] - 2 * diff)) count++;
    }
    return count;
}
