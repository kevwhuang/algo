// 206 - Reverse Linked List

function reverseList(head) {
    let res = null;
    while (head) {
        const cur = head;
        head = head.next, cur.next = res, res = cur;
    }
    return res;
}
