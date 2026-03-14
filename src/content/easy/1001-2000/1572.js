// 1572 - Matrix Diagonal Sum

function diagonalSum(mat) {
    const n = mat.length, mid = n >> 1;
    let sum = n % 2 ? -mat[mid][mid] : 0;
    let i = 0, j = n - 1;
    while (i < n && mat[i]) sum += mat[i][i] + mat[j--][i++];
    return sum;
}
