// 980 - Unique Paths III

function uniquePathsIII(grid) {
    function backtrack(r, c, acc) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        const cur = M[r][c];
        if (cur === -1) return;
        if (cur === 2 && acc === 0) return res++;
        M[r][c] = -1, acc--;
        backtrack(r - 1, c, acc);
        backtrack(r + 1, c, acc);
        backtrack(r, c - 1, acc);
        backtrack(r, c + 1, acc);
        M[r][c] = cur;
    }
    let a, b, acc = 1;
    const M = grid, m = M.length, n = M[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] === 1) a = r, b = c;
            else if (M[r][c] === 0) acc++;
        }
    }
    let res = 0;
    backtrack(a, b, acc);
    return res;
}
