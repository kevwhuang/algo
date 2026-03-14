// 787 - Cheapest Flights Within K Stops

function findCheapestPrice(n, flights, src, dst, k) {
    const adj = {};
    for (let i = 0; i < flights.length; i++) {
        adj[flights[i][0]] ??= new Uint16Array(n);
        adj[flights[i][0]][flights[i][1]] = flights[i][2];
    }
    if (!adj[src]) return -1;
    const C = new Uint32Array(n).fill(1e9);
    let Q = [[0, adj[src]]];
    while (~k-- && Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const w = Q[i][0], arr = Q[i][1];
            for (let v = 0; v < n; v++) {
                if (arr[v] === 0) continue;
                const next = w + arr[v];
                if (next >= C[v]) continue;
                C[v] = next;
                if (adj[v]) N.push([next, adj[v]]);
            }
        }
        Q = N;
    }
    return C[dst] === 1e9 ? -1 : C[dst];
}
