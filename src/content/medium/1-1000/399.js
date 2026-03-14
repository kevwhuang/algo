// 399 - Evaluate Division

function calcEquation(equations, values, queries) {
    const adj = new Map();
    for (let i = 0; i < equations.length; i++) {
        const var1 = equations[i][0];
        const var2 = equations[i][1];
        if (!adj.has(var1)) adj.set(var1, new Map());
        if (!adj.has(var2)) adj.set(var2, new Map());
        adj.get(var1).set(var2, values[i]);
        adj.get(var2).set(var1, 1 / values[i]);
    }
    L: for (let i = 0; i < queries.length; i++) {
        const var1 = queries[i][0];
        const var2 = queries[i][1];
        if (!adj.has(var1) || !adj.has(var2)) {
            queries[i] = -1;
            continue;
        }
        if (var1 === var2) {
            queries[i] = 1;
            continue;
        }
        const seen = new Set([var1]);
        let queue = [[var1, 1]];
        while (queue.length) {
            const nextQueue = [];
            for (let j = 0; j < queue.length; j++) {
                const div = queue[j][1];
                const edges = adj.get(queue[j][0]);
                for (const node of edges.keys()) {
                    if (seen.has(node)) continue;
                    const val = edges.get(node);
                    if (node === var2) {
                        queries[i] = div * val;
                        continue L;
                    }
                    seen.add(node);
                    nextQueue.push([node, div * val]);
                }
            }
            queue = nextQueue;
        }
        queries[i] = -1;
    }
    return queries;
}
