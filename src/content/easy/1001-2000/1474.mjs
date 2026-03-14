// 1474 - Delete N Nodes After M Nodes of a Linked List

function deleteNodes(head, m, n) {
    let node = head;
    while (node) {
        for (let i = 1; node && i < m; i++) {
            node = node.next;
        }
        const cur = node;
        for (let i = 0; node && i <= n; i++) {
            node = node.next;
        }
        if (cur) cur.next = node;
    }
    return head;
}
