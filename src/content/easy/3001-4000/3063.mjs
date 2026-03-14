// 3063 - Linked List Frequency

function frequenciesOfElements(head) {
    const map = new Map();
    let cur = head;
    while (cur) {
        map.set(cur.val, map.get(cur.val) + 1 || 1);
        cur = cur.next;
    }
    cur = head;
    let i = 0;
    for (const freq of map.values()) {
        cur.val = freq;
        if (++i < map.size) cur = cur.next;
    }
    cur.next = null;
    return head;
}
