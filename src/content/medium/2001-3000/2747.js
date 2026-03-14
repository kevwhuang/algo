// 2747 - Count Zero Request Servers

function countServers(n, logs, x, queries) {
    const arr = queries.map((e, i) => [e, i]);
    arr.sort((a, b) => a[0] - b[0]);
    logs.sort((a, b) => a[1] - b[1]);
    const servers = new Uint32Array(n + 1), len = logs.length;
    for (let i = 0, l = 0, r = 0; i < queries.length; i++) {
        let bound = arr[i][0];
        while (r < len && logs[r][1] <= bound) {
            if (servers[logs[r++][0]]++ === 0) n--;
        }
        bound -= x;
        while (l < len && logs[l][1] < bound) {
            if (servers[logs[l++][0]]-- === 1) n++;
        }
        queries[arr[i][1]] = n;
    }
    return queries;
}
