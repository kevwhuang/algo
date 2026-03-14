// 498 - Diagonal Traverse

function findDiagonalOrder(mat) {
    const size = mat.length * mat[0].length;
    const res = [];
    let row = 0, col = 0;
    while (true) {
        while (true) {
            res.push(mat[row][col]);
            if (col + 1 === mat[0].length) {
                row++;
                break;
            } else if (row === 0) {
                col++;
                break;
            } else {
                row--;
                col++;
            }
        }
        if (res.length === size) return res;
        while (true) {
            res.push(mat[row][col]);
            if (row + 1 === mat.length) {
                col++;
                break;
            } else if (col === 0) {
                row++;
                break;
            } else {
                row++;
                col--;
            }
        }
        if (res.length === size) return res;
    }
}
