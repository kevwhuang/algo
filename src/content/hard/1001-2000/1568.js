// 1568 - Minimum Number of Days to Disconnect Island

function minDays(grid) {
    function check() {
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                seen[r][c] = 0;
            }
        }
        for (let r = 0; r < m; r++) {
            for (let c = 0; c < n; c++) {
                if (M[r][c] === 0 || seen[r][c]) continue;
                if (acc) return true;
                dfs(r, c);
            }
        }
    }
    function dfs(r, c) {
        if (M[r][c] === 0 || seen[r][c]) return;
        seen[r][c] = 1, acc++;
        if (r) dfs(r - 1, c);
        if (r + 1 < m) dfs(r + 1, c);
        if (c) dfs(r, c - 1);
        if (c + 1 < n) dfs(r, c + 1);
        if (flag) return;
        let prev, i = -1;
        while (++i < 8) {
            const rr = r + D1[i], cc = c + D2[i];
            if (~rr && rr < m && ~cc && cc < n && M[rr][cc]) continue;
            if (prev && arr.push([r, c])) break;
            prev = true;
        }
    }
    if (!this.seen) seen = Array.from({ length: 30 }, () => new Uint8Array(30));
    const arr = [], M = grid, m = M.length, n = M[0].length;
    const D1 = [-1, 1, 0, 0, -1, -1, 1, 1], D2 = [0, 0, -1, 1, -1, 1, -1, 1];
    let acc = 0, flag;
    if (check()) return 0;
    if (acc <= 2) return acc;
    flag = true;
    for (let i = 0; i < arr.length; i++) {
        M[arr[i][0]][arr[i][1]] = 0, acc = 0;
        if (check()) return 1;
        M[arr[i][0]][arr[i][1]] = 1;
    }
    return 2;
}
