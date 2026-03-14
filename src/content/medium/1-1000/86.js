// 86 - Partition List

function partition(head, x) {
    const right = [];
    let slow = head, fast = head;
    while (fast) {
        if (fast.val < x) {
            slow.val = fast.val;
            slow = slow.next;
        } else {
            right.push(fast.val);
        }
        fast = fast.next;
    }
    for (let i = 0; i < right.length; i++) {
        slow.val = right[i];
        slow = slow.next;
    }
    return head;
}
