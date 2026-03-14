// 108 - Convert Sorted Array to Binary Search Tree

function sortedArrayToBST(nums) {
    if (!nums.length) return null;
    const m = ~~(nums.length / 2);
    const bst = new TreeNode(nums[m]);
    bst.left = sortedArrayToBST(nums.slice(0, m));
    bst.right = sortedArrayToBST(nums.slice(m + 1));
    return bst;
}
