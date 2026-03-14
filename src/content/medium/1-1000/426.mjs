// 426 - Convert Binary Search Tree to Sorted Doubly Linked List

function treeToDoublyList(root) {
    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        node.left = prev;
        prev.right = node;
        prev = node;
        dfs(node.right);
    }
    if (!root) return;
    let head = new Node();
    let prev = head;
    dfs(root);
    head = head.right;
    head.left = prev;
    prev.right = head;
    return head;
}
