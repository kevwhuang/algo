// 147 - Insertion Sort List

function insertionSortList(head) {
    const vals = [];
    let cur = head;
    while (cur) {
        vals.push(cur.val);
        cur = cur.next;
    }
    vals.sort((a, b) => a - b);
    cur = head;
    for (let i = 0; i < vals.length; i++) {
        cur.val = vals[i];
        cur = cur.next;
    }
    return head;
}
