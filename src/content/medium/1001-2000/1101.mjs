// 1101 - The Earliest Moment When Everyone Become Friends

function earliestAcq(logs, n) {
    function union(v1, v2) {
        const p1 = find(v1);
        const p2 = find(v2);
        if (p1 < p2) uf[p2] = p1;
        else uf[p1] = p2;
        if (p1 !== p2) n--;
    }
    function find(v) {
        while (v !== uf[v]) {
            uf[v] = uf[uf[v]];
            v = uf[v];
        }
        return v;
    }
    logs.sort((a, b) => a[0] - b[0]);
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < logs.length; i++) {
        union(logs[i][1], logs[i][2]);
        if (n === 1) return logs[i][0];
    }
    return -1;
}
