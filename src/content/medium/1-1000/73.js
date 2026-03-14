// 73 - Set Matrix Zeros

function setZeroes(matrix) {
    const M = matrix, m = M.length, n = M[0].length;
    for (let r = 0; r < m; r++) {
        for (let rr, cc, c = 0; c < n; c++) {
            if (M[r][c] !== 0) continue;
            rr = r;
            while (~--rr) M[rr][c] &&= null;
            rr = r;
            while (++rr < m) M[rr][c] &&= null;
            cc = c;
            while (~--cc) M[r][cc] &&= null;
            cc = c;
            while (++cc < n) M[r][cc] &&= null;
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            M[r][c] ??= 0;
        }
    }
}
