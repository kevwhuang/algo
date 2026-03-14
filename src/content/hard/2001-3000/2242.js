// 2242 - Maximum Score of a Node Sequence

function maximumScore(scores, edges) {
    if (!this.M) M = Array.from({ length: 50000 }, () => new Array(3));
    scores.push(0);
    const n = scores.length - 1;
    for (let i = 0; i < n; i++) {
        M[i][0] = M[i][1] = M[i][2] = n;
    }
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1];
        const A1 = M[u], A2 = M[v], a = scores[v], b = scores[u];
        if (a > scores[A1[0]]) A1[2] = A1[1], A1[1] = A1[0], A1[0] = v;
        else if (a > scores[A1[1]]) A1[2] = A1[1], A1[1] = v;
        else if (a > scores[A1[2]]) A1[2] = v;
        if (b > scores[A2[0]]) A2[2] = A2[1], A2[1] = A2[0], A2[0] = u;
        else if (b > scores[A2[1]]) A2[2] = A2[1], A2[1] = u;
        else if (b > scores[A2[2]]) A2[2] = u;
    }
    let res = -1;
    for (let i = 0; i < edges.length; i++) {
        const u = edges[i][0], v = edges[i][1], sum = scores[u] + scores[v];
        for (let j = 0; j < 3; j++) {
            const uu = M[u][j];
            if (uu === v || uu === n) continue;
            for (let k = 0; k < 3; k++) {
                const vv = M[v][k];
                if (vv === u || vv === uu || vv === n) continue;
                res = Math.max(sum + scores[uu] + scores[vv], res);
            }
        }
    }
    return res;
}
