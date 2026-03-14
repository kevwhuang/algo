// 109 - Convert Sorted List to Binary Search Tree

function sortedListToBST(head) {
    function build(l, r) {
        if (l > r) return null;
        const node = new TreeNode();
        const m = ~~((l + r) / 2);
        node.left = build(l, m - 1);
        node.val = cur.val;
        cur = cur.next;
        node.right = build(m + 1, r);
        return node;
    }
    let len = 0, cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    cur = head;
    return build(0, len - 1);
}
