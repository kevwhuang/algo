// 74 - Search a 2D Matrix

function searchMatrix(matrix, target) {
    const n = matrix[0].length;
    let l = 0, r = matrix.length * n - 1;
    while (l <= r) {
        const m = l + r >> 1;
        const cur = matrix[m / n >> 0][m % n];
        if (cur < target) l = m + 1;
        else if (cur > target) r = m - 1;
        else return true;
    }
    return false;
}
