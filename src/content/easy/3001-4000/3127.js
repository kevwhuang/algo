// 3127 - Make a Square With the Same Color

function canMakeSquare(grid) {
    for (let r = 0; r < 2; r++) {
        for (let c = 0; c < 2; c++) {
            let w = 0;
            for (let rr = r; rr < r + 2; rr++) {
                for (let cc = c; cc < c + 2; cc++) {
                    if (grid[rr][cc] === 'W') w++;
                }
            }
            if (w !== 2) return true;
        }
    }
    return false;
}
