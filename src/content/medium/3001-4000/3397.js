// 3397 - Maximum Number of Distinct Elements After Operations

function maxDistinctElements(nums, k) {
    nums = new Uint32Array(nums).sort();
    let res = 0, prev = -Infinity, i = -1;
    while (++i < nums.length) {
        if (nums[i] - k > prev) res++, prev = nums[i] - k;
        else if (nums[i] + k > prev) res++, prev++;
    }
    return res;
}
