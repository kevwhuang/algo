// 2359 - Find Closest Node to Given Two Nodes

function closestMeetingNode(edges, node1, node2) {
    function traverse(node, dist) {
        const seen = new Uint32Array(edges.length);
        while (~node && !seen[node]) {
            seen[node] = dist++;
            node = edges[node];
        }
        return seen;
    }
    let idx = -1, min = Infinity;
    const seen1 = traverse(node1, 1);
    const seen2 = traverse(node2, 1);
    for (let i = 0; i < edges.length; i++) {
        if (!seen1[i] || !seen2[i]) continue;
        const max = Math.max(seen1[i], seen2[i]);
        if (max < min) idx = i, min = max;
    }
    return idx;
}
