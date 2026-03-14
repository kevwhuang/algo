// 160 - Intersection of Two Linked Lists

function getIntersectionNode(headA, headB) {
    let node1 = headA, node2 = headB;
    while (node1 !== node2) {
        node1 = node1 ? node1.next : headB;
        node2 = node2 ? node2.next : headA;
    }
    return node1;
}
