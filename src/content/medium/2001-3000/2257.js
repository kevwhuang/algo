// 2257 - Count Unguarded Cells in the Grid

function countUnguarded(m, n, guards, walls) {
    const mat = Array.from({ length: m }, () => new Array(n));
    for (let i = 0; i < guards.length; i++) {
        mat[guards[i][0]][guards[i][1]] = false;
    }
    for (let i = 0; i < walls.length; i++) {
        mat[walls[i][0]][walls[i][1]] = false;
    }
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let i = 0; i < guards.length; i++) {
        const r0 = guards[i][0], c0 = guards[i][1];
        for (const [dr, dc] of dirs) {
            let r = r0 + dr, c = c0 + dc;
            while (r >= 0 && r < m && c >= 0 && c < n) {
                if (mat[r][c] === false) break;
                mat[r][c] = true;
                r += dr, c += dc;
            }
        }
    }
    let guarded = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (mat[r][c] === undefined) guarded++;
        }
    }
    return guarded;
}
