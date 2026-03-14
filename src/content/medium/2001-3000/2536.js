// 2536 - Increment Submatrices by One

function rangeAddQueries(n, queries) {
    const mat = Array.from({ length: n }, () => new Uint16Array(n));
    for (let i = 0; i < queries.length; i++) {
        const r1 = queries[i][0], c1 = queries[i][1];
        const r2 = queries[i][2] + 1, c2 = queries[i][3] + 1;
        mat[r1][c1]++;
        if (r2 < n) mat[r2][c1]--;
        if (c2 < n) mat[r1][c2]--;
        if (r2 < n && c2 < n) mat[r2][c2]++;
    }
    for (let r = 0; r < n; r++) {
        for (let c = 1; c < n; c++) {
            mat[r][c] += mat[r][c - 1];
        }
    }
    for (let c = 0; c < n; c++) {
        for (let r = 1; r < n; r++) {
            mat[r][c] += mat[r - 1][c];
        }
    }
    return mat;
}
