// 25 - Reverse Nodes in K-Group

function reverseKGroup(head, k) {
    let node = head, i = 0;
    while (node && ++i < k) node = node.next;
    if (!node) return head;
    const next = node.next;
    node.next = null, node = head;
    let res = null;
    while (node) {
        const cur = node;
        node = node.next, cur.next = res, res = cur;
    }
    head.next = reverseKGroup(next, k);
    return res;
}
