// 654 - Maximum Binary Tree

function constructMaximumBinaryTree(nums) {
    if (!nums.length) return null;
    let maxIndex = 0, maxVal = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < maxVal) continue;
        maxIndex = i;
        maxVal = nums[i];
    }
    const left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
    const right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));
    return new TreeNode(maxVal, left, right);
}
