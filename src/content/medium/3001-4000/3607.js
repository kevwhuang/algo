// 3607 - Power Grid Maintenance

function processQueries(c, connections, queries) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    if (!this.uf) uf = new Uint32Array(100001), arr = new Uint8Array(100001);
    for (let v = 1; v <= c; v++) {
        uf[v] = v, arr[v] = 0;
    }
    connections.forEach(e => uf[find(e[0])] = find(e[1]));
    const map = new Map();
    for (let v = 1; v <= c; v++) {
        if (!map.has(find(v))) map.set(uf[v], [1]);
        map.get(uf[v]).push(v);
    }
    const res = [];
    for (let i = 0; i < queries.length; i++) {
        const v = queries[i][1];
        if (queries[i][0] > 1 && ++arr[v]) continue;
        if (arr[v] < 1 && res.push(v)) continue;
        const cur = map.get(uf[v]), n = cur.length;
        let j = cur[0];
        while (j < n && arr[cur[j]]) j++;
        cur[0] = j;
        res.push(j < n ? cur[j] : -1);
    }
    return res;
}
