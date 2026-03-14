// 1265 - Print Immutable Linked List in Reverse

function printLinkedListInReverse(head) {
    function traverse(node) {
        if (!node) return;
        traverse(node.getNext());
        node.printValue();
    }
    traverse(head);
}
