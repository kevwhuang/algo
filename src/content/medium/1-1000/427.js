// 427 - Construct Quad Tree

function construct(grid) {
    function build(node, r, c, size) {
        const control = grid[r][c];
        const rBound = r + size, cBound = c + size;
        for (let rr = r; rr < rBound; rr++) {
            for (let cc = c; cc < cBound; cc++) {
                if (grid[rr][cc] === control) continue;
                size /= 2;
                node.val = node.isLeaf = false;
                node.topLeft = build(new Node(), r, c, size);
                node.topRight = build(new Node(), r, c + size, size);
                node.bottomLeft = build(new Node(), r + size, c, size);
                node.bottomRight = build(new Node(), r + size, c + size, size);
                return node;
            }
        }
        node.val = Boolean(control);
        node.isLeaf = true;
        return node;
    }
    return build(new Node(), 0, 0, grid.length);
}
