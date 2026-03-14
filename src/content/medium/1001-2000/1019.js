// 1019 - Next Greater Node in Linked List

function nextLargerNodes(head) {
    let cur = head, n = 0;
    while (cur) {
        cur = cur.next;
        n++;
    }
    const indices = new Array(n);
    const stack = [];
    cur = head, n = 0;
    while (cur) {
        while (stack.length && stack[stack.length - 1][0] < cur.val) {
            indices[stack.pop()[1]] = cur.val;
        }
        stack.push([cur.val, n++]);
        cur = cur.next;
    }
    for (let i = 0; i < stack.length; i++) {
        indices[stack[i][1]] = 0;
    }
    return indices;
}
