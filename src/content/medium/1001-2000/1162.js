// 1162 - As Far From Land as Possible

function maxDistance(grid) {
    let queue = [];
    const n = grid.length;
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c]) queue.push([r, c]);
        }
    }
    if (queue.length === n * n) return -1;
    let max = -1;
    const d = [0, -1, 0, 1, 0];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            for (let j = 0; j < 4; j++) {
                const r = queue[i][0] + d[j], c = queue[i][1] + d[j + 1];
                if (r === -1 || r === n || c === -1 || c === n) continue;
                if (grid[r][c]) continue;
                grid[r][c] = 1;
                nextQueue.push([r, c]);
            }
        }
        max++, queue = nextQueue;
    }
    return max;
}
