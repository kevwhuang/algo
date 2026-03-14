// 83 - Remove Duplicates From Sorted List

function deleteDuplicates(head) {
    let node = head;
    while (node) {
        if (node.next && node.val === node.next.val) node.next = node.next.next;
        else node = node.next;
    }
    return head;
}
