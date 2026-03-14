// 1290 - Convert Binary Number in a Linked List to Integer

function getDecimalValue(head) {
    let res = 0;
    while (head) res = res << 1 | head.val, head = head.next;
    return res;
}
