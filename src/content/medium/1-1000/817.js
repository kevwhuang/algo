// 817 - Linked List Components

function numComponents(head, nums) {
    nums = new Set(nums);
    let components = 0, connected = false;
    while (head) {
        if (connected && !nums.has(head.val)) components++;
        connected = nums.has(head.val);
        head = head.next;
    }
    return components + connected;
}
