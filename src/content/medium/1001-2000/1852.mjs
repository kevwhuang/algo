// 1852 - Distinct Numbers in Each Subarray

function distinctNumbers(nums, k) {
    const map = new Map();
    for (let i = 0; i < k; i++) {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
    }
    const res = new Uint32Array(nums.length - k + 1);
    res[0] = map.size;
    for (let i = 1; i < res.length; i++) {
        map.set(nums[i + k - 1], (map.get(nums[i + k - 1]) ?? 0) + 1);
        const f = map.get(nums[i - 1]) - 1;
        f === 0 ? map.delete(nums[i - 1]) : map.set(nums[i - 1], f);
        res[i] = map.size;
    }
    return res;
}
