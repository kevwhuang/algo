// 883 - Projection Area of 3D Shapes

function projectionArea(grid) {
    const n = grid.length;
    let x = 0, y = 0, z = 0;
    for (let i = 0; i < n; i++) {
        x += Math.max(...grid[i]);
    }
    for (let j = 0; j < n; j++) {
        let max = 0;
        for (let i = 0; i < n; i++) {
            const cell = grid[i][j];
            max = Math.max(cell, max);
            if (cell) z++;
        }
        y += max;
    }
    return x + y + z;
}
