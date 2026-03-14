// 2009 - Minimum Number of Operations to Make Array Continuous

function minOperations(nums) {
    if (!this.A) A = new Uint32Array(100000);
    nums = new Uint32Array(nums).sort(), A[0] = nums[0];
    const n = nums.length;
    let i = -1, j = 0;
    while (++i < n) if (nums[i] !== A[j]) A[++j] = nums[i];
    let res = Infinity, l = 0, r = -1;
    while (++r <= j) {
        while (A[r] - A[l] >= n) l++;
        res = Math.min(n + l - r, res);
    }
    return res - 1;
}
