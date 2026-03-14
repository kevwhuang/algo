// 3152 - Special Array II

function isArraySpecial(nums, queries) {
    nums[0] &= 1;
    const ps = new Uint32Array(nums.length);
    for (let i = 1; i < nums.length; i++) {
        nums[i] &= 1;
        ps[i] = ps[i - 1] + (nums[i - 1] === nums[i]);
    }
    for (let i = 0; i < queries.length; i++) {
        queries[i] = !(ps[queries[i][1]] - ps[queries[i][0]]);
    }
    return queries;
}
