// 2661 - First Completely Painted Row or Column

function firstCompleteIndex(arr, mat) {
    const m = mat.length, n = mat[0].length;
    const rowIndices = new Array(m * n + 1);
    const colIndices = new Array(m * n + 1);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            rowIndices[mat[r][c]] = r;
            colIndices[mat[r][c]] = c;
        }
    }
    const rows = {}, cols = {};
    for (let i = 0; i < arr.length; i++) {
        const r = rowIndices[arr[i]];
        rows[r] = (rows[r] ?? 0) + 1;
        if (rows[r] === n) return i;
        const c = colIndices[arr[i]];
        cols[c] = (cols[c] ?? 0) + 1;
        if (cols[c] === m) return i;
    }
}
