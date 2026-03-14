// 3684 - Maximize Sum of at Most K Distinct Elements

function maxKDistinct(nums, k) {
    nums = new Uint32Array(nums).sort();
    const res = [nums.at(-1)];
    for (let i = nums.length - 2; res.length < k && ~i; i--) {
        if (nums[i] < nums[i + 1]) res.push(nums[i]);
    }
    return res;
}
