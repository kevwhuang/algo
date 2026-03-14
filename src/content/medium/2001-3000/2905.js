// 2905 - Find Indices With Index and Value Difference II

function findIndices(nums, indexDifference, valueDifference) {
    let minIdx = 0, maxIdx = 0;
    for (let i = 0, j = indexDifference; i < nums.length; i++, j++) {
        if (nums[i] < nums[minIdx]) minIdx = i;
        else if (nums[i] > nums[maxIdx]) maxIdx = i;
        if (Math.abs(nums[minIdx] - nums[j]) >= valueDifference) {
            return [minIdx, j];
        }
        if (Math.abs(nums[maxIdx] - nums[j]) >= valueDifference) {
            return [maxIdx, j];
        }
    }
    return [-1, -1];
}
