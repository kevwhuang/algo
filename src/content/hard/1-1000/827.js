// 827 - Making a Large Island

function largestIsland(grid) {
    function dfs(r, c) {
        if (M[r][c] !== 1) return;
        M[r][c] = tgt, acc++;
        if (r) dfs(r - 1, c);
        if (r + 1 < n) dfs(r + 1, c);
        if (c) dfs(r, c - 1);
        if (c + 1 < n) dfs(r, c + 1);
    }
    let res = 1, tgt = 1, acc;
    const arr = [0, 0], M = grid, n = M.length;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] !== 1) continue;
            tgt++, acc = 0;
            dfs(r, c);
            res = Math.max(acc, res);
            arr.push(acc);
        }
    }
    tgt = 0;
    const seen = new Uint32Array(arr.length);
    const D = [0, -1, 0, 1, 0];
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c]) continue;
            tgt++, acc = 1;
            for (let i = 0; i < 4; i++) {
                const rr = r + D[i], cc = c + D[i + 1];
                if (rr < 0 || rr === n || cc < 0 || cc === n) continue;
                const cur = M[rr][cc];
                if (seen[cur] !== tgt) seen[cur] = tgt, acc += arr[cur];
            }
            res = Math.max(acc, res);
        }
    }
    return res;
}
