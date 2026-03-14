// 1361. Validate Binary Tree Nodes

function validateBinaryTreeNodes(n, leftChild, rightChild) {
    function union(v1, v2) {
        const p1 = find(v1);
        const p2 = find(v2);
        if (p1 === p2 || p2 !== v2) return false;
        uf[p2] = p1;
        n--;
        return true;
    }
    function find(v) {
        while (v !== uf[v]) {
            uf[v] = uf[uf[v]];
            v = uf[v];
        }
        return v;
    }
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let v1 = 0; v1 < leftChild.length; v1++) {
        if (leftChild[v1] !== -1 && !union(v1, leftChild[v1])) return false;
        if (rightChild[v1] !== -1 && !union(v1, rightChild[v1])) return false;
    }
    return n === 1;
}
