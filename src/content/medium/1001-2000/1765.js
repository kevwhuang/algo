// 1765 - Map of Highest Peak

function highestPeak(isWater) {
    const m = isWater.length, n = isWater[0].length;
    const res = new Array(m);
    for (let r = 0; r < m; r++) {
        res[r] = new Array(n).fill(null);
    }
    let queue = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (isWater[r][c]) queue.push([r, c]);
        }
    }
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let height = 0;
    while (queue.length) {
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const [r, c] = queue[i];
            res[r][c] = height;
            for (let j = 0; j < 4; j++) {
                const rr = r + dirs[j][0];
                const cc = c + dirs[j][1];
                if (isWater[rr]?.[cc] || res[rr]?.[cc] !== null) continue;
                isWater[rr][cc] = true;
                newQueue.push([rr, cc]);
            }
        }
        queue = newQueue;
        height++;
    }
    return res;
}
