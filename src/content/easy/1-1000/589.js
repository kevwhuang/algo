// 589 - N-Ary Tree Preorder Traversal

function preorder(root) {
    function traverse(cur) {
        res.push(cur.val);
        for (let i = 0; i < cur.children.length; i++) {
            cur.children[i] && traverse(cur.children[i]);
        }
    }
    if (!root) return [];
    const res = [];
    traverse(root);
    return res;
}
