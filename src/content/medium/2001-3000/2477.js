// 2477 - Minimum Fuel Cost to Report to the Capital

function minimumFuelCost(roads, seats) {
    function dfs(node, prev) {
        let people = 1;
        const neighbors = adj[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (neighbors[i] === prev) continue;
            people += dfs(neighbors[i], node);
        }
        if (node) liters += Math.ceil(people / seats);
        return people;
    }
    const adj = Array.from({ length: roads.length + 1 }, () => []);
    for (let i = 0; i < roads.length; i++) {
        adj[roads[i][0]].push(roads[i][1]);
        adj[roads[i][1]].push(roads[i][0]);
    }
    let liters = 0;
    dfs(0);
    return liters;
}
