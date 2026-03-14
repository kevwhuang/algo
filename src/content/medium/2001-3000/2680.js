// 2680 - Maximum OR

function maximumOr(nums, k) {
    k = 2 ** k;
    const suffix = new Uint32Array(nums.length);
    for (let i = suffix.length - 1; i; i--) {
        suffix[i - 1] = suffix[i] | nums[i];
    }
    let max = 0, prefix = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = k * nums[i], num32 = num % 1073741824;
        const or = num - num32 + (prefix | num32 | suffix[i]);
        if (or > max) max = or;
        prefix |= nums[i];
    }
    return max;
}
