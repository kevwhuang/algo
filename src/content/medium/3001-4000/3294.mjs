// 3294 - Convert Doubly Linked List to Array II

function toArray(node) {
    const res = [];
    let cur = node.prev;
    while (cur) {
        res.push(cur.val);
        cur = cur.prev;
    }
    res.reverse();
    cur = node;
    while (cur) {
        res.push(cur.val);
        cur = cur.next;
    }
    return res;
}
