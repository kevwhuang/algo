// 413 - Arithmetic Slices

function numberOfArithmeticSlices(nums) {
    let res = 0, i = 0;
    const n = nums.length;
    while (++i < n) {
        const tgt = nums[i] - nums[i - 1];
        let j = i;
        while (++j < n && nums[j] - nums[j - 1] === tgt) res++;
    }
    return res;
}
