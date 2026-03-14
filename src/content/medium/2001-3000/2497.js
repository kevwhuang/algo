// 2497 - Maximum Star Sum of a Graph

function maxStarSum(vals, edges, k) {
    const adj = Array.from({ length: vals.length }, () => []);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push(vals[edges[i][1]]);
        adj[edges[i][1]].push(vals[edges[i][0]]);
    }
    let max = -Infinity;
    for (let i = 0; i < adj.length; i++) {
        let star = vals[i];
        const neighbors = adj[i].sort((a, b) => b - a);
        const bound = Math.min(k, neighbors.length);
        for (let j = 0; j < bound && neighbors[j] > 0; j++) {
            star += neighbors[j];
        }
        if (star > max) max = star;
    }
    return max;
}
