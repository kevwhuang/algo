// 2181 - Merge Nodes in Between Zeros

function mergeNodes(head) {
    let node = head;
    while (node.next) {
        node.val += node.next.val;
        node.next = node.next.next;
        if (!node.next.next) {
            node.next = null;
            break;
        }
        if (!node.next.val) node = node.next;
    }
    return head;
}
