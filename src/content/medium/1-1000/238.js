// 238 - Product of Array Except Self

function productExceptSelf(nums) {
    const res = new Int32Array(nums.length);
    for (let prod = 1, i = 0; i < nums.length; i++) {
        res[i] = prod, prod *= nums[i];
    }
    for (let prod = 1, i = nums.length - 1; i; i--) {
        prod *= nums[i], res[i - 1] *= prod;
    }
    return res;
}
