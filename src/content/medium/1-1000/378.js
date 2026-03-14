// 378 - Kth Smallest Element in a Sorted Matrix

function kthSmallest(matrix, k) {
    const m = matrix.length, n = matrix[0].length;
    const arr = new Array(m * n);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            arr[r * m + c] = matrix[r][c];
        }
    }
    return arr.sort((a, b) => a - b)[k - 1];
}
