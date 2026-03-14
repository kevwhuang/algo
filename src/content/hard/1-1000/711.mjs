// 711 - Number of Distinct Islands II

function numDistinctIslands2(grid) {
    function dfs(r, c) {
        if (grid[r][c] === 0) return;
        grid[r][c] = 0;
        M1.push([r, c]);
        if (r) dfs(r - 1, c);
        if (r + 1 < m) dfs(r + 1, c);
        if (c) dfs(r, c - 1);
        if (c + 1 < n) dfs(r, c + 1);
    }
    const seen = new Set(), m = grid.length, n = grid[0].length;
    let M1;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            M1 = [];
            dfs(r, c);
            const nn = M1.length;
            if (nn <= 2 && seen.add(nn)) continue;
            const M2 = Array.from({ length: 8 }, () => new Array(nn));
            for (let i = 0; i < nn; i++) {
                const rr = M1[i][0], cc = M1[i][1];
                M2[0][i] = [-rr, -cc], M2[1][i] = [-rr, cc];
                M2[2][i] = [rr, -cc], M2[3][i] = [rr, cc];
                M2[4][i] = [-cc, -rr], M2[5][i] = [-cc, rr];
                M2[6][i] = [cc, -rr], M2[7][i] = [cc, rr];
            }
            let key;
            for (let i = 0; i < 8; i++) {
                M2[i].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
                const rr = M2[i][0][0], cc = M2[i][0][1];
                for (let j = 1; j < nn; j++) {
                    M2[i][j][0] -= rr, M2[i][j][1] -= cc;
                }
                M2[i][0][0] = M2[i][0][1] = 0;
                const s = String(M2[i]);
                if (!key || s < key) key = s;
            }
            seen.add(key);
        }
    }
    return seen.size;
}
