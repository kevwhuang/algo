// 2445 - Number of Nodes With Value One

function numberOfNodes(n, queries) {
    const tree = new Uint8Array(n + 1);
    for (let i = 0; i < queries.length; i++) {
        tree[queries[i]] = 1 - tree[queries[i]];
    }
    let nodes = 0;
    for (let node = 1; node <= n; node++) {
        const parent = tree[node >> 1];
        tree[node] = tree[node] ? 1 - parent : parent;
        nodes += tree[node];
    }
    return nodes;
}
