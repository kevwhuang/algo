// 3910. Count Connected Subgraphs With Even Node Sum

function evenSumSubgraphs(nums, edges) {
    if (!this.adj) adj = new Uint16Array(13);
    adj.fill(0);
    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]] |= 1 << edges[i][1];
        adj[edges[i][1]] |= 1 << edges[i][0];
    }
    let res = 0;
    const n = 1 << nums.length;
    for (let mask = 1; mask < n; mask++) {
        let sum = 0;
        for (let cur = mask; cur; cur ^= cur & -cur) {
            sum += nums[31 - Math.clz32(cur & -cur)];
        }
        if (sum & 1) continue;
        let seen = mask & -mask, Q = seen;
        while (Q) {
            let N = 0;
            for (let cur = Q; cur; cur ^= cur & -cur) {
                N |= mask & ~seen & adj[31 - Math.clz32(cur & -cur)];
            }
            seen |= N, Q = N;
        }
        if (seen === mask) res++;
    }
    return res;
}
