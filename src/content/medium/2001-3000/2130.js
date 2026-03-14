// 2130 - Maximum Twin Sum of a Linked List

function pairSum(head) {
    const stack = [];
    let max = -Infinity, fast = head;
    while (fast) {
        stack.push(head.val);
        head = head.next;
        fast = fast.next.next;
    }
    for (let i = stack.length - 1; i >= 0; i--) {
        max = Math.max(head.val + stack[i], max);
        head = head.next;
    }
    return max;
}
