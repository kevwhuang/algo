// 959 - Regions Cut by Slashes

function regionsBySlashes(grid) {
    function dfs(r, c) {
        if (r === -1 || r === triple || c === -1 || c === triple) return;
        if (M[r][c]) return;
        M[r][c] = 1;
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const map = () => new Uint8Array(triple);
    const n = grid.length, triple = 3 * n;
    const M = Array.from({ length: triple }, map);
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === '/') {
                M[3 * r][3 * c + 2] = 1;
                M[3 * r + 1][3 * c + 1] = 1;
                M[3 * r + 2][3 * c] = 1;
            } else if (grid[r][c] === '\\') {
                M[3 * r][3 * c] = 1;
                M[3 * r + 1][3 * c + 1] = 1;
                M[3 * r + 2][3 * c + 2] = 1;
            }
        }
    }
    let regions = 0;
    for (let r = 0; r < triple; r++) {
        for (let c = 0; c < triple; c++) {
            if (M[r][c]) continue;
            regions++;
            dfs(r, c);
        }
    }
    return regions;
}
