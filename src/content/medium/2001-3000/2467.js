// 2467 - Most Profitable Path in a Tree

function mostProfitablePath(edges, bob, amount) {
    function build() {
        for (let i = 0; i < edges.length; i++) {
            const u = edges[i][0], v = edges[i][1];
            adj[u] ? adj[u].push(v) : adj[u] = [v];
            adj[v] ? adj[v].push(u) : adj[v] = [u];
        }
    }
    function bfs() {
        let queue = [0];
        while (queue.length) {
            const nextQueue = [];
            for (let i = 0; i < queue.length; i++) {
                const u = queue[i], neighbors = adj[u];
                for (let j = 0; j < neighbors.length; j++) {
                    const v = neighbors[j];
                    if (uf[v] !== 1e6) continue;
                    uf[v] = u;
                    if (v === bob) return;
                    nextQueue.push(v);
                }
            }
            queue = nextQueue;
        }
    }
    function trace() {
        let v = bob, t = 0;
        while (v) {
            path.set(v, t++);
            v = uf[v];
        }
        path.set(0, path.size);
    }
    function dfs(v, pre, t, acc) {
        if (!path.has(v) || t < path.get(v)) acc += amount[v];
        else if (t === path.get(v)) acc += amount[v] / 2;
        const neighbors = adj[v];
        if (v && neighbors.length === 1) {
            return income = Math.max(acc, income);
        }
        for (let i = 0; i < neighbors.length; i++) {
            if (neighbors[i] === pre) continue;
            dfs(neighbors[i], v, t + 1, acc);
        }
    }
    const adj = {};
    build();
    const uf = new Uint32Array(edges.length + 1).fill(1e6);
    uf[0] = 0;
    bfs();
    const path = new Map();
    trace();
    let income = -Infinity;
    dfs(0, 0, 0, 0);
    return income;
}
