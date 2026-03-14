// 82 - Remove Duplicates From Sorted List II

function deleteDuplicates(head) {
    const bucket = new Array(201).fill(0);
    let cur = head;
    while (cur) {
        bucket[cur.val + 100]++;
        cur = cur.next;
    }
    cur = head;
    let prev = null;
    for (let i = 0; i < 201; i++) {
        if (bucket[i] !== 1) continue;
        prev = cur;
        cur.val = i - 100;
        cur = cur.next;
    }
    if (prev) prev.next = null;
    else return prev;
    return head;
}
