// 2045 - Second Minimum Time to Reach Destination

function secondMinimum(n, edges, time, change) {
    const adj = Array.from({ length: n + 1 }, () => []);
    edges.forEach(e => adj[e[0]].push(e[1]) && adj[e[1]].push(e[0]));
    const C1 = new Uint32Array(n + 1), C2 = new Uint32Array(n + 1);
    let res = time, Q = [1];
    while (true) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            const arr = adj[Q[i]];
            for (let j = 0; j < arr.length; j++) {
                const v = arr[j];
                if (C2[v]) continue;
                if (C1[v] === 0) C1[v] = res;
                else if (C2[v] === 0 && res > C1[v]) C2[v] = res;
                if (v === n && C2[n]) return res;
                N.push(v);
            }
        }
        if (res / change >> 0 & 1) res += change - res % change;
        res += time, Q = N;
    }
}
