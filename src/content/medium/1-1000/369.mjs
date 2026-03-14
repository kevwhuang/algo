// 369 - Plus One Linked List

function plusOne(head) {
    const sentinel = new ListNode();
    sentinel.next = head;
    let cur = sentinel, start = sentinel;
    while (cur.next) {
        if (cur.val !== 9) start = cur;
        cur = cur.next;
    }
    if (cur.val !== 9) {
        cur.val++;
        return head;
    }
    const startNine = head.val === 9;
    start.val++;
    start = start.next;
    while (start) {
        start.val = 0;
        start = start.next;
    }
    return startNine ? sentinel : sentinel.next;
}
