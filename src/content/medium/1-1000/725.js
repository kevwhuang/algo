// 725 - Split Linked List in Parts

function splitListToParts(head, k) {
    const parts = new Array(k).fill(null);
    let len = 0, cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }
    const sublen = Math.floor(len / k);
    let extra = len % k, prev;
    cur = head;
    for (let i = 0; i < k; i++) {
        parts[i] = cur;
        const bound = sublen + (extra ? 1 : 0);
        for (let j = 0; j < bound; j++) {
            prev = cur;
            cur = cur.next;
        }
        if (extra) extra--;
        if (prev) prev.next = null;
        if (!cur) return parts;
    }
}
