// 23 - Merge K Sorted Lists

function mergeKLists(lists) {
    let acc = 0;
    for (let i = 0; i < lists.length; i++) {
        let node = lists[i];
        while (node) acc++, node = node.next;
    }
    const arr = new Int16Array(acc);
    for (let i = 0, j = 0; i < lists.length; i++) {
        let node = lists[i];
        while (node) arr[j++] = node.val, node = node.next;
    }
    arr.sort();
    const res = new ListNode();
    for (let node = res, i = 0; i < arr.length; i++) {
        node = node.next = new ListNode(arr[i]);
    }
    return res.next;
}
