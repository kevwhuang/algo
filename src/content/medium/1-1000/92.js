// 92 - Reverse Linked List II

function reverseBetween(head, left, right) {
    right -= left;
    const sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;
    while (--left > 0) prev = prev.next;
    let cur = prev.next;
    while (right--) {
        const a = cur.next, b = prev.next, c = cur.next.next;
        prev.next = a, cur.next.next = b, cur.next = c;
    }
    return sentinel.next;
}
