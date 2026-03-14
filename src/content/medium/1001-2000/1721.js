// 1721 - Swapping Nodes in a Linked List

function swapNodes(head, k) {
    let len = 0, cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    if (k > Math.floor(len / 2)) k = len - k + 1;
    let i = 0;
    cur = head;
    while (++i < k) cur = cur.next;
    const node = cur, bound = len - k + 1;
    while (++i <= bound) cur = cur.next;
    [node.val, cur.val] = [cur.val, node.val];
    return head;
}
