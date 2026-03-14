// 1104 - Path in Zigzag Labeled Binary Tree

function pathInZigZagTree(label) {
    let row = ~~Math.log2(label) + 1;
    const path = new Uint32Array(row);
    while (row--) {
        path[row] = label;
        label = 2 ** (row - 1) + 2 ** row - 1 - ~~(label / 2);
    }
    return path;
}
