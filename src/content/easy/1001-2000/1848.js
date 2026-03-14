// 1848 - Minimum Distance to the Target Element

function getMinDistance(nums, target, start) {
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) min = Math.min(Math.abs(i - start), min);
    }
    return min;
}
