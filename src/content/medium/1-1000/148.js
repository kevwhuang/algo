// 148 - Sort List

function sortList(head) {
    function merge(l1, l2) {
        const res = new ListNode();
        let cur = res;
        while (l1 && l2) {
            cur.next = l1.val < l2.val ? l1 : l2;
            l1.val < l2.val ? l1 = l1.next : l2 = l2.next;
            cur = cur.next;
        }
        if (l1) cur.next = l1;
        if (l2) cur.next = l2;
        return res.next;
    }
    if (!head || !head.next) return head;
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const mid = slow.next;
    slow.next = null;
    return merge(sortList(head), sortList(mid));
}
