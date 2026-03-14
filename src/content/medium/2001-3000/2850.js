// 2850 - Minimum Moves to Spread Stones Over Grid

function minimumMoves(grid) {
    function backtrack(i) {
        if (i === give.length) return 0;
        let min = Infinity;
        const r = give[i][0], c = give[i][1];
        for (let j = 0; j < take.length; j++) {
            const rr = take[j][0], cc = take[j][1];
            if (grid[rr][cc] === 1) continue;
            const dist = Math.abs(r - rr) + Math.abs(c - cc);
            grid[rr][cc]--;
            min = Math.min(dist + backtrack(i + 1), min);
            grid[rr][cc]++;
        }
        return min;
    }
    const give = [], take = [];
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (grid[r][c] === 0) give.push([r, c]);
            else if (grid[r][c] > 1) take.push([r, c]);
        }
    }
    return backtrack(0);
}
