// 2689 - Extract Kth Character From the Rope Tree

function getKthCharacter(root, k) {
    if (!root.len) return root.val[k - 1];
    const len = root.left?.len || root.left?.val.length || 0;
    if (len > k - 1) return getKthCharacter(root.left, k);
    return getKthCharacter(root.right, k - len);
}
