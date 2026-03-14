// 2642 - Design Graph With Shortest Path Calculator

class Graph {
    constructor(n, edges) {
        this.adj = Array.from({ length: n + 1 }, () => []);
        edges.forEach(e => this.addEdge(e));
    }
    addEdge(edge) {
        this.adj[edge[0]].push(edge.slice(1));
    }
    shortestPath(node1, node2) {
        const C = { [node1]: 0 };
        const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
        pq.enqueue([node1, 0]);
        while (pq.size()) {
            const u = pq.front()[0];
            if (u === node2) return C[u];
            const arr = this.adj[u], w = pq.dequeue()[1];
            for (let i = 0; i < arr.length; i++) {
                const v = arr[i][0], next = arr[i][1] + w;
                if (next >= C[v]) continue;
                C[v] = next;
                pq.enqueue([v, next]);
            }
        }
        return -1;
    }
}
