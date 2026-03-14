// 2089 - Find Target Indices After Sorting Array

function targetIndices(nums, target) {
    nums.sort((a, b) => a - b);
    const indices = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > target) break;
        if (nums[i] === target) indices.push(i);
    }
    return indices;
}
