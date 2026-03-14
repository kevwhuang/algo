// 1836 - Remove Duplicates From an Unsorted Linked List

function deleteDuplicatesUnsorted(head) {
    const freqs = {};
    let cur = head;
    while (cur) {
        freqs[cur.val] = (freqs[cur.val] || 0) + 1;
        cur = cur.next;
    }
    const sentinel = new ListNode();
    cur = sentinel;
    while (head) {
        if (freqs[head.val] === 1) {
            cur.next = head;
            cur = cur.next;
        }
        head = head.next;
    }
    cur.next = null;
    return sentinel.next;
}
