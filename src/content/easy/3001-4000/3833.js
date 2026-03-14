// 3833 - Count Dominant Indices

function dominantIndices(nums) {
    let res = 0;
    const n = nums.length - 1;
    for (let acc = nums[n], i = n - 1; ~i; i--) {
        if (nums[i] > acc / (n - i)) res++;
        acc += nums[i];
    }
    return res;
}
