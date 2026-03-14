// 2816 - Double a Number Represented as a Linked List

function doubleIt(head) {
    function reverse(head) {
        let cur, rvs = null;
        while (head) {
            cur = head;
            head = head.next;
            cur.next = rvs;
            rvs = cur;
        }
        return rvs;
    }
    head = reverse(head);
    let cur = head, carry = 0;
    while (cur) {
        const newDigit = 2 * cur.val + carry;
        if (newDigit <= 9) {
            cur.val = newDigit;
            carry = 0;
        } else {
            cur.val = newDigit % 10;
            carry = Math.floor(newDigit / 10);
        }
        cur = cur.next;
    }
    head = reverse(head);
    return carry ? new ListNode(carry, head) : head;
}
