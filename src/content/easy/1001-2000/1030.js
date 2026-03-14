// 1030 - Matrix Cells in Distance Order

function allCellsDistOrder(rows, cols, rCenter, cCenter) {
    const dist = (a, b) => Math.abs(a - rCenter) + Math.abs(b - cCenter);
    const res = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            res.push([r, c]);
        }
    }
    return res.sort((a, b) => dist(a[0], a[1]) - dist(b[0], b[1]));
}
