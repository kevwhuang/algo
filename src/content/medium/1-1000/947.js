// 947 - Most Stones Removed With Same Row or Column

function removeStones(stones) {
    function dfs(r, c) {
        if (seen.has(r) && seen.get(r).has(c)) return;
        seen.set(r, (seen.get(r) ?? new Set()).add(c));
        for (const cc of rows.get(r)) {
            dfs(r, cc);
        }
        for (const rr of cols.get(c)) {
            dfs(rr, c);
        }
    }
    const rows = new Map(), cols = new Map();
    for (let i = 0; i < stones.length; i++) {
        const r = stones[i][0], c = stones[i][1];
        rows.set(r, (rows.get(r) ?? new Set()).add(c));
        cols.set(c, (cols.get(c) ?? new Set()).add(r));
    }
    let components = 0;
    const seen = new Map();
    for (let i = 0; i < stones.length; i++) {
        const r = stones[i][0], c = stones[i][1];
        if (seen.has(r) && seen.get(r).has(c)) continue;
        dfs(r, c);
        components++;
    }
    return stones.length - components;
}
