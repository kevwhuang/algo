// 840 - Magic Squares in Grid

function numMagicSquaresInside(grid) {
    const magic = new Set([
        '276951438', '294753618',
        '438951276', '492357816',
        '618753294', '672159834',
        '816357492', '834159672',
    ]);
    const m = grid.length - 2, n = grid[0].length - 2;
    let subgrids = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r + 1][c + 1] !== 5) continue;
            let square = '';
            for (let dr = 0; dr < 3; dr++) {
                for (let dc = 0; dc < 3; dc++) {
                    square += grid[r + dr][c + dc];
                }
            }
            if (magic.has(square)) subgrids++;
        }
    }
    return subgrids;
}
