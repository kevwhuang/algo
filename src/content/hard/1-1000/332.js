// 332 - Reconstruct Itinerary

function findItinerary(tickets) {
    const adj = {};
    for (let i = 0; i < tickets.length; i++) {
        adj[tickets[i][0]] ??= [];
        adj[tickets[i][0]].push(tickets[i][1]);
    }
    for (const key in adj) {
        adj[key].sort().reverse();
    }
    const res = [], S = ['JFK'];
    while (S.length) {
        while (adj[S.at(-1)]?.length) S.push(adj[S.at(-1)].pop());
        res.push(S.pop());
    }
    return res.reverse();
}
