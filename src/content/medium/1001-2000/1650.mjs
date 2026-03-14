// 1650 - Lowest Common Ancestor of a Binary Tree III

function lowestCommonAncestor(p, q) {
    const set = new WeakSet();
    while (p) {
        set.add(p);
        p = p.parent;
    }
    while (true) {
        if (set.has(q)) return q;
        q = q.parent;
    }
}
