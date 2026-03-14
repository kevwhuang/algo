// 876 - Middle of the Linked List

function middleNode(head) {
    let slow = head;
    while (head && head.next) {
        slow = slow.next;
        head = head.next.next;
    }
    return slow;
}
