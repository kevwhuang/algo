// 328 - Odd Even Linked List

function oddEvenList(head) {
    if (!head) return head;
    let node1 = head, node2 = head.next, next = node2;
    while (node2 && node2.next) {
        node1.next = node1.next.next, node1 = node1.next;
        node2.next = node2.next.next, node2 = node2.next;
    }
    node1.next = next;
    return head;
}
