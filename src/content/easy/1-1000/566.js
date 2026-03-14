// 566 - Reshape the Matrix

function matrixReshape(mat, r, c) {
    const m = mat.length, n = mat[0].length;
    if (m * n !== r * c) return mat;
    const reshape = [];
    for (let i = 1; i <= r; i++) {
        reshape.push(new Array(c));
    }
    let y = 0, x = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            reshape[i][j] = mat[y][x];
            if (x + 1 < n) x++;
            else {
                x = 0;
                y++;
            }
        }
    }
    return reshape;
}
