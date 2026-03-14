// 1669 - Merge in Between Linked Lists

function mergeInBetween(list1, a, b, list2) {
    b -= --a - 1;
    let head = list1;
    while (a--) head = head.next;
    let tail = head;
    while (b--) tail = tail.next;
    head.next = list2;
    while (head.next) head = head.next;
    head.next = tail;
    return list1;
}
