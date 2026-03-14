// 558 - Logical OR of Two Binary Grids Represented as Quad-Trees

function intersect(quadTree1, quadTree2) {
    if (quadTree1.isLeaf) return quadTree1.val ? quadTree1 : quadTree2;
    if (quadTree2.isLeaf) return quadTree2.val ? quadTree2 : quadTree1;
    const nodes = [
        intersect(quadTree1.topLeft, quadTree2.topLeft),
        intersect(quadTree1.topRight, quadTree2.topRight),
        intersect(quadTree1.bottomLeft, quadTree2.bottomLeft),
        intersect(quadTree1.bottomRight, quadTree2.bottomRight),
    ];
    if (nodes.every(e => e.isLeaf && e.val)) return nodes[0];
    return new _Node(true, false, ...nodes);
}
