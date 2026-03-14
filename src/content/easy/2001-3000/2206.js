// 2206 - Divide Array Into Equal Pairs

function divideArray(nums) {
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.has(nums[i]) ? set.delete(nums[i]) : set.add(nums[i]);
    }
    return !set.size;
}
