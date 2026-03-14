// 203 - Remove Linked List Elements

function removeElements(head, val) {
    if (!head || !val) return head;
    const sentinel = new ListNode();
    sentinel.next = head;
    let node = sentinel;
    while (node.next) {
        if (node.next.val === val) node.next = node.next.next;
        else node = node.next;
    }
    return sentinel.next;
}
