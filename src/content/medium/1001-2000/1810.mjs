// 1810 - Minimum Path Cost in a Hidden Grid

function findShortestPath(master) {
    function dfs(node) {
        for (let i = 0; i < 4; i++) {
            const next = node + dirs[i][2];
            if (M[next] !== 255) continue;
            if (!master.canMove(dirs[i][0])) M[next] = 0;
            if (!master.canMove(dirs[i][0])) continue;
            M[next] = master.move(dirs[i][0]);
            dfs(next);
            if (master.isTarget()) end = next;
            master.move(dirs[i][1]);
        }
    }
    const n = 201, start = 101 * n;
    const M = new Uint8Array(n * n).fill(255);
    const dirs = [['U', 'D', -n], ['D', 'U', n], ['L', 'R', -1], ['R', 'L', 1]];
    let end;
    dfs(start);
    if (!end) return -1;
    const costs = { [start]: 0 };
    const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    pq.enqueue([start, 0]);
    while (true) {
        const [u, cost] = pq.dequeue();
        if (u === end) return costs[u];
        for (let i = 0; i < 4; i++) {
            const v = u + dirs[i][2];
            if (v < 0 || v > 40400) continue;
            if (M[v] === 0) continue;
            const nextCost = M[v] + cost;
            if (nextCost >= costs[v]) continue;
            costs[v] = nextCost;
            pq.enqueue([v, nextCost]);
        }
    }
}
