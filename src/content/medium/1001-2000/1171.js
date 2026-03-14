// 1171 - Remove Zero Sum Consecutive Nodes From Linked List

function removeZeroSumSublists(head) {
    const map = new Map();
    const sentinel = new ListNode();
    sentinel.next = head;
    let cur = sentinel, running = 0;
    while (cur) {
        running += cur.val;
        map.set(running, cur);
        cur = cur.next;
    }
    cur = sentinel, running = 0;
    while (cur) {
        running += cur.val;
        cur.next = map.get(running).next;
        cur = cur.next;
    }
    return sentinel.next;
}
