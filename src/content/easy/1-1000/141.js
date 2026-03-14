// 141 - Linked List Cycle

function hasCycle(head) {
    let node = head;
    while (head && head.next) {
        node = node.next, head = head.next.next;
        if (node === head) return true;
    }
    return false;
}
