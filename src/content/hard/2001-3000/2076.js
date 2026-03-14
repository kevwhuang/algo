// 2076 - Process Restricted Friend Requests

function friendRequests(n, restrictions, requests) {
    function find(v) {
        while (v !== uf[v]) uf[v] = uf[uf[v]], v = uf[v];
        return v;
    }
    const uf = Array.from({ length: n }, (_, i) => i);
    for (let i = 0; i < requests.length; i++) {
        const u = find(requests[i][0]), v = find(requests[i][1]);
        for (let j = 0; j < restrictions.length; j++) {
            const uu = find(restrictions[j][0]), vv = find(restrictions[j][1]);
            if (u === uu && v === vv) requests[i] = false, j = Infinity;
            else if (u === vv && v === uu) requests[i] = false, j = Infinity;
        }
        if (requests[i] === false) continue;
        requests[i] = true, uf[u] = v;
    }
    return requests;
}
