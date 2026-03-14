// 51 - N-Queens

function solveNQueens(n) {
    function backtrack(r) {
        if (r === n) {
            const arr = new Array(n);
            for (let i = 0; i < n; i++) {
                arr[i] = M[i].reduce((s, e) => s + (e ? 'Q' : '.'), '');
            }
            return res.push(arr);
        }
        for (let rr, cc, c = 0; c < n; c++) {
            rr = r - 1;
            while (~rr && M[rr][c] === 0) rr--;
            if (~rr) continue;
            rr = r - 1, cc = c - 1;
            while (~rr && ~cc && M[rr][cc] === 0) rr--, cc--;
            if (~rr && ~cc) continue;
            rr = r - 1, cc = c + 1;
            while (~rr && ~cc && M[rr][cc] === 0) rr--, cc++;
            if (~rr && cc < n) continue;
            M[r][c] = 1;
            backtrack(r + 1);
            M[r][c] = 0;
        }
    }
    const res = [];
    const M = Array.from({ length: n }, () => new Uint8Array(n));
    backtrack(0);
    return res;
}
