// 2807 - Insert Greatest Common Divisors in Linked List

function insertGreatestCommonDivisors(head) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    let cur = head;
    while (cur.next) {
        cur.next = new ListNode(gcd(cur.val, cur.next.val), cur.next);
        cur = cur.next.next;
    }
    return head;
}
