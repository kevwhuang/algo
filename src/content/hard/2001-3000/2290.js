// 2290 - Minimum Obstacle Removal to Reach Corner

function minimumObstacles(grid) {
    const m = grid.length, n = grid[0].length, mm = m - 1, nn = n - 1;
    const seen = new Uint8Array(m * n);
    seen[0] = 1;
    const D = [0, -1, 0, 1, 0];
    let acc = 0, cur, S1 = [0], S2 = [];
    while (true) {
        const r = S1.at(-1) / n >> 0, c = S1.pop() % n;
        for (let i = 0; i < 4; i++) {
            const rr = r + D[i], cc = c + D[i + 1];
            if (rr < 0 || rr === m || cc < 0 || cc === n) continue;
            if (rr === mm && cc === nn) return acc;
            const next = rr * n + cc;
            if (seen[next]) continue;
            seen[next] = 1;
            (grid[rr][cc] ? S2 : S1).push(next);
        }
        if (S1.length === 0) acc++, cur = S1, S1 = S2, S2 = cur;
    }
}
