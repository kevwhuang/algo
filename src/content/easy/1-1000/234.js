// 234 - Palindrome Linked List

function isPalindrome(head) {
    let slow = head, fast = head;
    while (fast && fast.next) slow = slow.next, fast = fast.next.next;
    let rvs = null;
    while (slow) {
        const cur = slow;
        slow = slow.next, cur.next = rvs, rvs = cur;
    }
    slow = rvs, fast = head;
    while (slow) {
        if (slow.val !== fast.val) return false;
        slow = slow.next, fast = fast.next;
    }
    return true;
}
