// 1428 - Leftmost Column With at Least a One

function leftMostColumnWithOne(binaryMatrix) {
    const [m, n] = binaryMatrix.dimensions();
    let min = n;
    for (let row = 0; row < m; row++) {
        let l = 0, r = n - 1;
        while (l <= r) {
            const col = l + r >> 1;
            if (binaryMatrix.get(row, col)) r = col - 1;
            else l = col + 1;
        }
        if (l < min) min = l;
    }
    return min === n ? -1 : min;
}
