// 2046 - Sort Linked List Already Sorted Using Absolute Values

function sortLinkedList(head) {
    const list2 = new ListNode();
    let list1 = null, cur = head, cur2 = list2, tail1 = null;
    while (cur) {
        if (cur.val < 0) {
            if (list1) {
                const node = cur;
                cur = cur.next;
                node.next = list1;
                list1 = node;
            } else {
                list1 = cur;
                cur = cur.next;
                list1.next = null;
                tail1 = list1;
            }
        } else {
            cur2.next = cur;
            cur = cur.next;
            cur2 = cur2.next;
            cur2.next = null;
        }
    }
    if (!tail1) return list2.next;
    tail1.next = list2.next;
    return list1;
}
