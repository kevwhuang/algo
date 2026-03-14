// 606 - Construct String From Binary Tree

function tree2str(root) {
    if (!root) return '';
    const left = tree2str(root.left);
    const right = tree2str(root.right);
    if (right) return `${root.val}(${left})(${right})`;
    if (left) return `${root.val}(${left})`;
    return String(root.val);
}
