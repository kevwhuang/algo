// 2256 - Minimum Average Difference

function minimumAverageDifference(nums) {
    let idx, min = Infinity;
    let left = 0, right = nums.reduce((s, e) => s + e);
    for (let i = 0; i < nums.length; i++) {
        left += nums[i];
        right -= nums[i];
        const leftAvg = left / (i + 1) >> 0;
        const rightAvg = right / (nums.length - i - 1) >> 0;
        const avgDiff = Math.abs(leftAvg - rightAvg);
        if (avgDiff >= min) continue;
        idx = i;
        min = avgDiff;
    }
    return idx;
}
