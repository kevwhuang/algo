// 2095 - Delete the Middle Node of a Linked List

function deleteMiddle(head) {
    if (!head.next) return null;
    let slow = head, fast = head.next.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    return head;
}
