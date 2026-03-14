// 2909 - Minimum Sum of Mountain Triplets II

function minimumSum(nums) {
    const n = nums.length;
    const prefix = new Uint32Array(n);
    prefix[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = Math.min(nums[i], prefix[i - 1]);
    }
    const suffix = new Uint32Array(n);
    suffix[n - 1] = nums[n - 1];
    for (let i = n - 2; ~i; i--) {
        suffix[i] = Math.min(nums[i], suffix[i + 1]);
    }
    let min = Infinity;
    for (let i = 1; i < n - 1; i++) {
        const num = nums[i];
        if (num <= prefix[i] || num <= suffix[i]) continue;
        min = Math.min(prefix[i] + num + suffix[i], min);
    }
    return min === Infinity ? -1 : min;
}
