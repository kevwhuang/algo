// 1557 - Minimum Number of Vertices to Reach All Nodes

function findSmallestSetOfVertices(n, edges) {
    const set = new Set();
    for (let i = 0; i < edges.length; i++) {
        set.add(edges[i][1]);
    }
    const vertices = [];
    for (let i = 0; i < n; i++) {
        if (!set.has(i)) vertices.push(i);
    }
    return vertices;
}
