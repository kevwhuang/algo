// 1042 - Flower Planting With No Adjacent

function gardenNoAdj(n, paths) {
    const adj = new Map();
    for (let i = 1; i <= n; i++) {
        adj.set(i, []);
    }
    for (let i = 0; i < paths.length; i++) {
        adj.get(paths[i][0]).push(paths[i][1]);
        adj.get(paths[i][1]).push(paths[i][0]);
    }
    for (let i = 1; i <= n; i++) {
        const connected = new Set();
        const garden = adj.get(i);
        for (let j = 0; j < garden.length; j++) {
            const neighbor = adj.get(garden[j]);
            if (Array.isArray(neighbor)) continue;
            connected.add(neighbor);
        }
        if (!connected.has(1)) adj.set(i, 1);
        else if (!connected.has(2)) adj.set(i, 2);
        else if (!connected.has(3)) adj.set(i, 3);
        else adj.set(i, 4);
    }
    return Array.from(adj.values());
}
