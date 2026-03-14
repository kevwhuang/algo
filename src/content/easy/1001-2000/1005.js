// 1005 - Maximize Sum of Array After K Negations

function largestSumAfterKNegations(nums, k) {
    nums = new Int8Array(nums).sort();
    for (let i = 0; i < nums.length && k > 0; i++, k--) {
        if (nums[i] >= 0) break;
        nums[i] *= -1;
    }
    let sum = 0, min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i], min = Math.min(nums[i], min);
    }
    return k % 2 ? sum - min - min : sum;
}
