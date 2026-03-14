// 61 - Rotate List

function rotateRight(head, k) {
    if (!head) return head;
    let cur = head, length = 0;
    while (cur) {
        cur = cur.next;
        length++;
    }
    k %= length;
    cur = head;
    while (k--) cur = cur.next;
    let prev = head;
    while (cur.next) {
        prev = prev.next;
        cur = cur.next;
    }
    cur.next = head;
    head = prev.next;
    prev.next = null;
    return head;
}
