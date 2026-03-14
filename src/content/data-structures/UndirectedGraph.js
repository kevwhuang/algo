class UndirectedGraph {
    constructor(edges) {
        this.graph = {};
        for (let i = 0; i < edges.length; i++) {
            this.insertEdge(...edges[i]);
        }
    }
    bfs(v) {
        if (!this.graph[v]) return null;
        const seen = new Set([v]);
        let Q = [v];
        while (Q.length) {
            const N = [];
            for (let i = 0; i < Q.length; i++) {
                const u = Q[i];
                for (const v of this.graph[u].keys()) {
                    if (seen.has(v)) continue;
                    seen.add(v);
                    N.push(v);
                }
            }
            Q = N;
        }
        return [...seen];
    }
    dfs(v) {
        if (!this.graph[v]) return null;
        const seen = new Set([v]);
        const S = [v];
        while (S.length) {
            const u = S.pop();
            for (const v of this.graph[u].keys()) {
                if (seen.has(v)) continue;
                seen.add(v);
                S.push(v);
            }
        }
        return [...seen];
    }
    dijkstra(u, v) {
        if (!this.graph[u] || !this.graph[v]) return null;
        const C = { [u]: 0 };
        const pq = new (require('./PriorityQueue'))((a, b) => a[1] < b[1]);
        pq.enqueue([u, 0]);
        while (pq.size()) {
            const u = pq.front()[0], w = pq.dequeue()[1];
            if (u === v) return w;
            for (const v of this.graph[u].keys()) {
                const next = w + this.graph[u].get(v);
                if (next >= C[v]) continue;
                C[v] = next;
                pq.enqueue([v, next]);
            }
        }
        return null;
    }
    insertEdge(u, v, w) {
        this.insertVertex(u);
        this.insertVertex(v);
        this.graph[u].set(v, w);
        this.graph[v].set(u, w);
        return [this.graph[u], this.graph[v]];
    }
    insertVertex(v) {
        return this.graph[v] ??= new Map();
    }
    removeEdge(u, v) {
        if (!this.graph[u] || !this.graph[v]) return null;
        this.graph[u].delete(v);
        this.graph[v].delete(u);
        return [this.graph[u], this.graph[v]];
    }
    removeVertex(v) {
        if (!this.graph[v]) return null;
        for (const u of this.graph[v].keys()) {
            this.removeEdge(u, v);
        }
        return delete this.graph[v];
    }
    union() {
        const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
        const uf = {};
        for (const v in this.graph) {
            uf[v] = Number(v);
        }
        for (const u in this.graph) {
            for (const v of this.graph[u].keys()) {
                uf[find(u)] = find(v);
            }
        }
        for (const v in this.graph) {
            find(v);
        }
        return uf;
    }
}

module.exports = UndirectedGraph;
