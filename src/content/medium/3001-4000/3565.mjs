// 3565 - Sequential Grid Path Cover

function findPath(grid, k) {
    function backtrack(r, c, next) {
        if (res.length === tgt) return true;
        for (let i = 0; i < 4; i++) {
            const rr = r + D[i], cc = c + D[i + 1];
            if (rr < 0 || rr === m || cc < 0 || cc === n) continue;
            const cur = M[rr][cc];
            if (cur && cur !== next || seen[rr][cc]) continue;
            res.push([rr, cc]);
            seen[rr][cc] = 1;
            if (backtrack(rr, cc, next + Boolean(cur))) return true;
            seen[rr][cc] = 0;
            res.pop();
        }
    }
    const res = [], M = grid, m = M.length, n = M[0].length, tgt = m * n;
    const seen = Array.from({ length: m }, () => new Uint8Array(n));
    const D = [0, -1, 0, 1, 0];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] > 1) continue;
            res.push([r, c]);
            seen[r][c] = 1;
            if (backtrack(r, c, M[r][c] + 1)) return res;
            seen[r][c] = 0;
            res.pop();
        }
    }
    return res;
}
