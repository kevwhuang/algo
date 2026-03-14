// 138 - Copy List With Random Pointer

function copyRandomList(head) {
    const map = new Map([[null, null]]);
    for (let node = head; node; node = node.next) {
        map.set(node, new ListNode(node.val));
    }
    for (let node = head; node; node = node.next) {
        map.get(node).next = map.get(node.next);
        map.get(node).random = map.get(node.random);
    }
    return map.get(head);
}
