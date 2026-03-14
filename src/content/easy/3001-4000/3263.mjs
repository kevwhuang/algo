// 3263 - Convert Doubly Linked List to Array I

function toArray(head) {
    const res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}
