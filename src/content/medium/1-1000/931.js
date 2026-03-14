// 931 - Minimum Falling Path Sum

function minFallingPathSum(matrix) {
    const M = matrix, n = M.length;
    for (let r = 1; r < n; r++) {
        for (let c = 0; c < n; c++) {
            const left = c ? M[r - 1][c - 1] : Infinity;
            const right = c + 1 < n ? M[r - 1][c + 1] : Infinity;
            M[r][c] += Math.min(left, M[r - 1][c], right);
        }
    }
    return Math.min(...M.at(-1));
}
