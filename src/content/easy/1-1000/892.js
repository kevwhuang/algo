// 892 - Surface Area of 3D Shapes

function surfaceArea(grid) {
    let surface = 0;
    const n = grid.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const cur = grid[i][j];
            if (i === 0) surface += cur;
            if (j === 0) surface += cur;
            if (cur) surface += 2;
            surface += Math.abs(cur - (grid[i + 1]?.[j] || 0));
            surface += Math.abs(cur - (grid[i]?.[j + 1] || 0));
        }
    }
    return surface;
}
