// 3217 - Delete Nodes From Linked List Present in Array

function modifiedList(nums, head) {
    nums = new Set(nums);
    const sentinel = new ListNode(0, head);
    let cur = sentinel.next, prev = sentinel;
    while (cur) {
        if (nums.has(cur.val)) prev.next = cur.next;
        else prev = cur;
        cur = cur.next;
    }
    return sentinel.next;
}
