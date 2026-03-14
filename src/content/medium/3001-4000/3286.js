// 3286 - Find a Safe Walk Through a Grid

function findSafeWalk(grid, health) {
    const mapper = () => new Uint8Array(n).fill(health);
    const m = grid.length, n = grid[0].length;
    const costs = Array.from({ length: m }, mapper);
    costs[0][0] = grid[0][0];
    const pq = new PriorityQueue({ compare: (a, b) => a[2] - b[2] });
    pq.enqueue([0, 0, grid[0][0]]);
    const mm = m - 1, nn = n - 1, d = [0, -1, 0, 1, 0];
    while (pq.size()) {
        const r = pq.front()[0], c = pq.front()[1], cost = pq.dequeue()[2];
        for (let i = 0; i < 4; i++) {
            const rr = r + d[i], cc = c + d[i + 1];
            if (rr === -1 || rr === m || cc === -1 || cc === n) continue;
            const nextCost = cost + grid[rr][cc];
            if (nextCost >= costs[rr][cc]) continue;
            if (rr === mm && cc === nn) return true;
            costs[rr][cc] = nextCost;
            pq.enqueue([rr, cc, nextCost]);
        }
    }
    return false;
}
