// 1490 - Clone N-Ary Tree

function cloneTree(root) {
    if (!root) return;
    const clone = new Node(root.val);
    for (let i = 0; i < root.children.length; i++) {
        clone.children.push(cloneTree(root.children[i]));
    }
    return clone;
}
