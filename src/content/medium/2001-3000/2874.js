// 2874 - Maximum Value of an Ordered Triplet II

function maximumTripletValue(nums) {
    const n = nums.length;
    const prefix = new Uint32Array(n);
    prefix[0] = nums[0];
    for (let i = 1; i < n; i++) {
        prefix[i] = Math.max(nums[i], prefix[i - 1]);
    }
    const suffix = new Uint32Array(n);
    suffix[n - 1] = nums[n - 1];
    for (let i = n - 2; ~i; i--) {
        suffix[i] = Math.max(nums[i], suffix[i + 1]);
    }
    let max = 0;
    const lim = n - 1;
    for (let j = 1; j < lim; j++) {
        const val = (prefix[j - 1] - nums[j]) * suffix[j + 1];
        max = Math.max(val, max);
    }
    return max;
}
