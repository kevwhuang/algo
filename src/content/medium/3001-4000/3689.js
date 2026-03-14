// 3689 - Maximum Total Subarray Value I

function maxTotalValue(nums, k) {
    return k * (Math.max(...nums) - Math.min(...nums));
}
