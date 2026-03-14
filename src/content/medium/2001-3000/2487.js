// 2487 - Remove Nodes From Linked List

function removeNodes(head) {
    if (!head) return null;
    head.next = removeNodes(head.next);
    return head.next && head.val < head.next.val ? head.next : head;
}
