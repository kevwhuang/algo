// 1901 - Find a Peak Element II

function findPeakGrid(mat) {
    for (let row = 0; row < mat.length; row++) {
        let l = 0, r = mat[0].length - 1;
        while (l < r) {
            const mid = (l + r) / 2 >> 0;
            if (mat[row][mid] < mat[row][mid + 1]) l = mid + 1;
            else r = mid;
        }
        if (row - 1 >= 0 && mat[row][r] < mat[row - 1][r]) continue;
        if (row + 1 < mat.length && mat[row][r] < mat[row + 1][r]) continue;
        return [row, r];
    }
    for (let col = 0; col < mat[0].length; col++) {
        let l = 0, r = mat.length - 1;
        while (l < r) {
            const mid = (l + r) / 2 >> 0;
            if (mat[mid][col] < mat[mid + 1][col]) l = mid + 1;
            else r = mid;
        }
        if (col - 1 >= 0 && mat[r][col] < mat[r][col - 1]) continue;
        if (col + 1 < mat[0].length && mat[r][col] < mat[r][col + 1]) continue;
        return [r, col];
    }
}
