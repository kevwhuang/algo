// 885 - Spiral Matrix III

function spiralMatrixIII(rows, cols, rStart, cStart) {
    const res = [];
    const increments = [() => c++, () => r++, () => c--, () => r--];
    const size = rows * cols;
    let r = rStart, c = cStart, steps = 1;
    while (true) {
        for (let dir = 0; dir < 4; dir++) {
            for (let n = 0; n < steps; n++) {
                if (0 <= c && c < cols && 0 <= r && r < rows) res.push([r, c]);
                increments[dir]();
            }
            if (res.length === size) return res;
            if (dir & 1) steps++;
        }
    }
}
