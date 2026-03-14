// 598 - Range Addition II

function maxCount(m, n, ops) {
    if (ops.length === 0) return m * n;
    let minOpsHeight = m, minOpsWidth = n;
    for (let i = 0; i < ops.length; i++) {
        minOpsHeight = Math.min(ops[i][0], minOpsHeight);
        minOpsWidth = Math.min(ops[i][1], minOpsWidth);
    }
    return minOpsHeight * minOpsWidth;
}
