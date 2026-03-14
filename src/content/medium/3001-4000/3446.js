// 3446 - Sort Matrix by Diagonals

function sortMatrix(grid) {
    const M = grid, n = M.length;
    for (let rr = n - 1; ~rr; rr--) {
        const arr = new Int32Array(n - rr);
        for (let r = rr, c = 0; r < n; r++, c++) {
            arr[c] = M[r][c];
        }
        arr.sort((a, b) => b - a);
        for (let r = rr, c = 0; r < n; r++, c++) {
            M[r][c] = arr[c];
        }
    }
    for (let cc = 1; cc < n; cc++) {
        const arr = new Int32Array(n - cc);
        for (let r = 0, c = cc; c < n; r++, c++) {
            arr[r] = M[r][c];
        }
        arr.sort();
        for (let r = 0, c = cc; c < n; r++, c++) {
            M[r][c] = arr[r];
        }
    }
    return M;
}
