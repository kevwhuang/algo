// 1514 - Path With Maximum Probability

function maxProbability(n, edges, succProb, start_node, end_node) {
    const bf = new Array(n).fill(0);
    bf[start_node] = 1;
    while (--n) {
        let updated;
        for (let i = 0; i < edges.length; i++) {
            const v1 = edges[i][0], v2 = edges[i][1];
            let next = bf[v1] * succProb[i];
            if (next > bf[v2]) {
                bf[v2] = next;
                updated = true;
            }
            next = bf[v2] * succProb[i];
            if (next > bf[v1]) {
                bf[v1] = next;
                updated = true;
            }
        }
        if (!updated) break;
    }
    return bf[end_node];
}
