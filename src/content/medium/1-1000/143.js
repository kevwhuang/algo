// 143 - Reorder List

function reorderList(head) {
    let slow = head, fast = head;
    while (fast && fast.next) slow = slow.next, fast = fast.next.next;
    let node = null;
    while (slow) {
        const cur = slow;
        slow = slow.next, cur.next = node, node = cur;
    }
    while (node.next) {
        const next = node.next;
        node.next = head.next, head.next = node;
        head = node.next, node = next;
    }
}
