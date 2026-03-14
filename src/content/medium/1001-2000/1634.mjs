// 1634 - Add Two Polynomials Represented as Linked Lists

function addPoly(poly1, poly2) {
    const sentinel = new PolyNode();
    let cur = sentinel;
    while (poly1 && poly2) {
        let node;
        if (poly1.power < poly2.power) {
            node = poly2;
            poly2 = poly2.next;
            node.next = null;
        } else if (poly1.power > poly2.power) {
            node = poly1;
            poly1 = poly1.next;
            node.next = null;
        } else if (poly1.coefficient !== -poly2.coefficient) {
            poly1.coefficient += poly2.coefficient;
            node = poly1;
            poly1 = poly1.next;
            poly2 = poly2.next;
            node.next = null;
        } else {
            poly1 = poly1.next;
            poly2 = poly2.next;
            continue;
        }
        cur.next = node;
        cur = cur.next;
    }
    if (poly1) cur.next = poly1;
    if (poly2) cur.next = poly2;
    return sentinel.next;
}
