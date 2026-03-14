// 1738 - Find Kth Largest XOR Coordinate Value

function kthLargestValue(matrix, k) {
    const m = matrix.length, n = matrix[0].length;
    const xors = new Uint8Array(m * n);
    xors[0] = matrix[0][0];
    let i = 1;
    for (let r = 1; r < m; r++) {
        xors[i++] = matrix[r][0] ^= matrix[r - 1][0];
    }
    for (let c = 1; c < n; c++) {
        xors[i++] = matrix[0][c] ^= matrix[0][c - 1];
    }
    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            xors[i++] = matrix[r][c]
                ^= matrix[r][c - 1]
                ^ matrix[r - 1][c]
                ^ matrix[r - 1][c - 1];
        }
    }
    return xors.sort()[m * n - k];
}
