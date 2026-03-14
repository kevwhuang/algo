// 24 - Swap Nodes in Pairs

function swapPairs(head) {
    let cur = head;
    while (cur && cur.next) {
        const val = cur.val;
        cur.val = cur.next.val;
        cur.next.val = val;
        cur = cur.next.next;
    }
    return head;
}
