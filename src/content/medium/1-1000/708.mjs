// 708 - Insert Into a Sorted Circular Linked List

function insert(head, insertVal) {
    const node = new Node(insertVal);
    if (head === null) {
        const list = node;
        list.next = list;
        return list;
    }
    if (head === head.next) {
        head.next = node;
        node.next = head;
        return head;
    }
    let cur = head;
    while (cur.next !== head) {
        if (cur.val <= insertVal && insertVal <= cur.next.val) break;
        if (cur.val > cur.next.val) {
            if (cur.val <= insertVal) break;
            if (insertVal <= cur.next.val) break;
        }
        cur = cur.next;
    }
    const next = cur.next;
    cur.next = node;
    node.next = next;
    return head;
}
