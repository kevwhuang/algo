// 237 - Delete Node in a Linked List

function deleteNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}
