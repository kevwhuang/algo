// 1135 - Connecting Cities With Minimum Cost

function minimumCost(n, connections) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    connections.sort((a, b) => a[2] - b[2]);
    let cost = 0;
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < connections.length; i++) {
        const p1 = find(connections[i][0] - 1);
        const p2 = find(connections[i][1] - 1);
        if (p1 === p2) continue;
        cost += connections[i][2];
        uf[p1] = p2;
        n--;
    }
    return n === 1 ? cost : -1;
}
