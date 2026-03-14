// 430 - Flatten a Multilevel Doubly Linked List

function flatten(head) {
    const stack = [];
    let cur = head;
    while (cur) {
        if (!cur.next && stack.length) {
            cur.next = stack.pop();
            if (cur.next) cur.next.prev = cur;
        }
        if (cur.child) {
            stack.push(cur.next);
            cur.next = cur.child;
            cur.child.prev = cur;
            cur.child = null;
        }
        cur = cur.next;
    }
    return head;
}
