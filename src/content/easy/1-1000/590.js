// 590 - N-Ary Tree Postorder Traversal

function postorder(root) {
    function traverse(cur) {
        for (let i = 0; i < cur.children.length; i++) {
            cur.children[i] && traverse(cur.children[i]);
        }
        res.push(cur.val);
    }
    if (!root) return [];
    const res = [];
    traverse(root);
    return res;
}
