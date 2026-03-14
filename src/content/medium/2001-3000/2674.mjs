// 2674 - Split a Circular Linked List

function splitCircularLinkedList(list) {
    let slow = list, fast = list, len = 1;
    while (slow.next !== fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        len++;
    }
    const tail = slow;
    slow = list;
    len = Math.ceil(len / 2);
    while (--len) slow = slow.next;
    const head = slow.next;
    tail.next = head;
    slow.next = list;
    return [list, head];
}
