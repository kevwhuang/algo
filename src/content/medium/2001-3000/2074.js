// 2074 - Reverse Nodes in Even Length Groups

function reverseEvenLengthGroups(head) {
    const vals = [];
    let cur = head, bound = 1;
    while (cur) {
        const group = [];
        while (group.length < bound && cur) {
            group.push(cur.val);
            cur = cur.next;
        }
        if (group.length % 2 === 0) group.reverse();
        vals.push(group);
        bound++;
    }
    cur = head;
    for (let i = 0; i < vals.length; i++) {
        const group = vals[i];
        for (let j = 0; j < group.length; j++) {
            cur.val = group[j];
            cur = cur.next;
        }
    }
    return head;
}
