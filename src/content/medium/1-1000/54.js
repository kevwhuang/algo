// 54 - Spiral Matrix

function spiralOrder(matrix) {
    const M = matrix, m = M.length, n = M[0].length;
    const res = new Int8Array(m * n);
    let r = 0, c = 0, dr = 0, dc = 1;
    for (let i = 0; i < res.length; r += dr, c += dc, i++) {
        res[i] = M[r][c], M[r][c] = null;
        const rr = r + dr, cc = c + dc;
        if (~rr && rr < m && ~cc && cc < n && M[rr][cc] !== null) continue;
        if (dr === 0 && dc === 1) dr = 1, dc = 0;
        else if (dr === 1 && dc === 0) dr = 0, dc = -1;
        else if (dr === 0 && dc === -1) dr = -1, dc = 0;
        else dr = 0, dc = 1;
    }
    return res;
}
