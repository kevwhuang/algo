// 1139 - Largest 1-Bordered Square

function largest1BorderedSquare(grid) {
    const m = grid.length, n = grid[0].length;
    const ps1 = Array.from({ length: m }, () => new Uint8Array(n));
    const ps2 = Array.from({ length: m }, () => new Uint8Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            if (c) ps1[r][c] = ps1[r][c - 1] + 1;
            if (r) ps2[r][c] = ps2[r - 1][c] + 1;
        }
    }
    let max = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            let d = Math.min(m - r, n - c);
            while (~--d && d >= max) {
                if (ps1[r][c + d] < d) continue;
                if (ps1[r + d][c + d] < d) continue;
                if (ps2[r + d][c] < d) continue;
                if (ps2[r + d][c + d] < d) continue;
                max = d + 1;
            }
        }
    }
    return max * max;
}
