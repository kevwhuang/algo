// 851 - Loud and Rich

function loudAndRich(richer, quiet) {
    const adj = Array.from({ length: quiet.length }, () => []);
    for (let i = 0; i < richer.length; i++) {
        adj[richer[i][1]].push(richer[i][0]);
    }
    const res = new Uint16Array(adj.length);
    for (let n = 0; n < adj.length; n++) {
        let min = n, queue = [n];
        while (queue.length) {
            const nextQueue = [];
            for (let i = 0; i < queue.length; i++) {
                const neighbors = adj[queue[i]];
                for (let j = 0; j < neighbors.length; j++) {
                    const node = neighbors[j];
                    if (res[node] === 0) {
                        if (quiet[node] < quiet[min]) min = node;
                        nextQueue.push(node);
                    } else if (quiet[res[node]] < quiet[min]) {
                        min = res[node];
                    }
                }
            }
            queue = nextQueue;
        }
        res[n] = min;
    }
    return res;
}
