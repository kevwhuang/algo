// 2812 - Find the Safest Path in a Grid

function maximumSafenessFactor(grid) {
    const validate = (r, c) => r >= 0 && r < n && c >= 0 && c < n;
    const n = grid.length, nn = n - 1;
    if (grid[0][0] || grid[nn][nn]) return 0;
    const safety = Array.from({ length: n }, () => new Array(n).fill(1000));
    let queue = [];
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0) continue;
            safety[r][c] = 0;
            queue.push([r, c]);
        }
    }
    let dist = 1;
    const d = [0, -1, 0, 1, 0];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < queue.length; j++) {
                const r = queue[j][0] + d[i], c = queue[j][1] + d[i + 1];
                if (!validate(r, c)) continue;
                if (safety[r][c] <= dist) continue;
                safety[r][c] = dist;
                nextQueue.push([r, c]);
            }
        }
        dist++, queue = nextQueue;
    }
    let l = 0, r = dist - 1;
    L: while (l < r) {
        const m = l + r >> 1;
        if (safety[0][0] < m) { r = m; continue; }
        const seen = Array.from({ length: n }, () => new Uint8Array(n));
        seen[0][0] = 1;
        queue = [[0, 0]];
        while (queue.length) {
            const nextQueue = [];
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < queue.length; j++) {
                    const r = queue[j][0] + d[i], c = queue[j][1] + d[i + 1];
                    if (!validate(r, c)) continue;
                    if (safety[r][c] < m) continue;
                    if (r === nn && c === nn) { l = m + 1; continue L; }
                    if (seen[r][c]) continue;
                    seen[r][c] = 1;
                    nextQueue.push([r, c]);
                }
            }
            queue = nextQueue;
        }
        r = m;
    }
    return r - 1;
}
