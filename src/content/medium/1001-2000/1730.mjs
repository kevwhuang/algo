// 1730 - Shortest Path to Get Food

function getFood(grid) {
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const m = grid.length, n = grid[0].length;
    let rStart, cStart;
    L: for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] !== '*') continue;
            grid[r][c] = 'X';
            rStart = r, cStart = c;
            break L;
        }
    }
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let queue = [[rStart, cStart]], len = 1;
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const r = queue[i][0], c = queue[i][1];
            for (let j = 0; j < 4; j++) {
                const rr = r + dirs[j][0], cc = c + dirs[j][1];
                if (!validate(rr, cc)) continue;
                if (grid[rr][cc] === 'X') continue;
                if (grid[rr][cc] === '#') return len;
                grid[rr][cc] = 'X';
                nextQueue.push([rr, cc]);
            }
        }
        queue = nextQueue;
        len++;
    }
    return -1;
}
