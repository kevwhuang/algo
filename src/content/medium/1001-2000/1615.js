// 1615 - Maximal Network Rank

function maximalNetworkRank(n, roads) {
    const adj = Array.from({ length: n }, () => new Set());
    for (let i = 0; i < roads.length; i++) {
        adj[roads[i][0]].add(roads[i][1]);
        adj[roads[i][1]].add(roads[i][0]);
    }
    let maxRank = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let rank = adj[i].size + adj[j].size;
            if (adj[i].has(j)) rank--;
            maxRank = Math.max(rank, maxRank);
        }
    }
    return maxRank;
}
