// 2903 - Find Indices With Index and Value Difference I

function findIndices(nums, indexDifference, valueDifference) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + indexDifference; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) < valueDifference) continue;
            return [i, j];
        }
    }
    return [-1, -1];
}
