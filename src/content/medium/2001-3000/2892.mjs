// 2892 - Minimizing Array After Replacing Pairs With Their Product

function minArrayLength(nums, k) {
    let merges = 0;
    for (let i = 0; i < nums.length; i++) {
        let prod = nums[i];
        while (i + 1 < nums.length && prod * nums[i + 1] <= k) {
            merges++, prod *= nums[++i];
            if (prod === 0) return 1;
        }
    }
    return nums.length - merges;
}
