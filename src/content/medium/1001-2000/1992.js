// 1992 - Find All Groups of Farmland

function findFarmland(land) {
    function dfs(r, c) {
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (land[r][c] === 0) return;
        land[r][c] = 0;
        r1 = Math.min(r, r1);
        c1 = Math.min(c, c1);
        r2 = Math.max(r, r2);
        c2 = Math.max(c, c2);
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const m = land.length, n = land[0].length;
    const groups = [];
    let r1, c1, r2, c2;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (land[r][c] === 0) continue;
            r1 = Infinity, c1 = Infinity, r2 = -1, c2 = -1;
            dfs(r, c);
            groups.push([r1, c1, r2, c2]);
        }
    }
    return groups;
}
