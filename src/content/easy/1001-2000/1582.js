// 1582 - Special Positions in a Binary Matrix

function numSpecial(mat) {
    let count = 0;
    const M = mat, m = M.length, n = M[0].length;
    for (let r = 0; r < m; r++) {
        L: for (let c = 0; c < n; c++) {
            if (M[r][c] === 0) continue;
            for (let rr = r - 1; ~rr; rr--) {
                if (M[rr][c]) break L;
            }
            for (let rr = r + 1; rr < m; rr++) {
                if (M[rr][c]) break L;
            }
            for (let cc = c - 1; ~cc; cc--) {
                if (M[r][cc]) break L;
            }
            for (let cc = c + 1; cc < n; cc++) {
                if (M[r][cc]) break L;
            }
            count++;
            break;
        }
    }
    return count;
}
