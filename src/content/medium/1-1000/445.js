// 445 - Add Two Numbers II

function addTwoNumbers(l1, l2) {
    let cur = l1;
    const num1 = [];
    while (cur) {
        num1.push(cur.val);
        cur = cur.next;
    }
    cur = l2;
    const num2 = [];
    while (cur) {
        num2.push(cur.val);
        cur = cur.next;
    }
    const num = String(BigInt(num1.join('')) + BigInt(num2.join('')));
    const list = num1.length >= num2.length ? l1 : l2;
    cur = list;
    for (let i = 0; i < num.length; i++) {
        if (i === num.length - 2 && !cur.next) cur.next = new ListNode();
        cur.val = Number(num[i]);
        cur = cur.next;
    }
    return list;
}
