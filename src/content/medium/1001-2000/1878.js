// 1878 - Get Biggest Three Rhombus Sums in a Grid

function getBiggestThree(grid) {
    function record(sum) {
        if (sum === a || sum === b || sum === c) return;
        if (sum > a) c = b, b = a, a = sum;
        else if (sum > b) c = b, b = sum;
        else if (sum > c) c = sum;
    }
    let a = 0, b = 0, c = 0;
    const m = grid.length, n = grid[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            record(grid[r][c]);
            let r1 = r, c2 = c, r3 = r, c4 = c;
            while (~--r1 && ++c2 < n && ++r3 < m && ~--c4) {
                let sum = 0, rr = r1, cc = c;
                while (rr < r) sum += grid[rr++][cc++];
                while (rr < r3) sum += grid[rr++][cc--];
                while (rr > r) sum += grid[rr--][cc--];
                while (rr > r1) sum += grid[rr--][cc++];
                record(sum);
            }
        }
    }
    return [a, b, c].filter(Boolean);
}
