// 1367 - Linked List in Binary Tree

function isSubPath(head, root) {
    function dfs(node, cur) {
        if (!node) return false;
        if (match(node, cur)) return true;
        return dfs(node.left, cur) || dfs(node.right, cur);
    }
    function match(node, cur) {
        if (!cur) return true;
        if (!node) return false;
        if (node.val !== cur.val) return false;
        return match(node.left, cur.next) || match(node.right, cur.next);
    }
    return dfs(root, head);
}
