// 867 - Transpose Matrix

function transpose(matrix) {
    const res = [];
    let row = [];
    for (let j = 0; j < matrix[0].length; j++) {
        for (let i = 0; i < matrix.length; i++) {
            row.push(matrix[i][j]);
        }
        res.push(row);
        row = [];
    }
    return res;
}
