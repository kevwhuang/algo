// 1631 - Path With Minimum Effort

function minimumEffortPath(heights) {
    const m = heights.length, n = heights[0].length;
    const costs = Array.from({ length: m }, () => new Uint32Array(n).fill(1e6));
    costs[0][0] = 0;
    const pq = new PriorityQueue({ compare: (a, b) => a[2] - b[2] });
    pq.enqueue([0, 0, 0]);
    const mm = m - 1, nn = n - 1;
    const dr = [-1, 1, 0, 0], dc = [0, 0, -1, 1];
    while (true) {
        const [r, c, cost] = pq.dequeue();
        if (r === mm && c === nn) return cost;
        for (let i = 0; i < 4; i++) {
            const rr = r + dr[i], cc = c + dc[i];
            if (rr === -1 || rr === m || cc === -1 || cc === n) continue;
            const effort = Math.abs(heights[r][c] - heights[rr][cc]);
            const nextCost = Math.max(effort, cost);
            if (nextCost >= costs[rr][cc]) continue;
            costs[rr][cc] = nextCost;
            pq.enqueue([rr, cc, nextCost]);
        }
    }
}
