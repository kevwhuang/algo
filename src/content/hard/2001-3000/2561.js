// 2561 - Rearranging Fruits

function minCost(basket1, basket2) {
    let res = 0, arr = [], min = 1e9, n = basket1.length, i = -1;
    const B1 = new Map(), B2 = new Map();
    while (++i < n) {
        const a = basket1[i], b = basket2[i];
        min = Math.min(a, b, min);
        B1.set(a, (B1.get(a) ?? 0) + 1);
        B2.set(a, (B2.get(a) ?? 0) + 1).set(b, (B2.get(b) ?? 0) + 1);
    }
    for (const e of B2) {
        const a = e[0], b = e[1];
        if (b & 1) return -1;
        let acc = Math.abs((B1.get(a) ?? 0) - b / 2);
        while (~--acc) arr.push(a);
    }
    arr = new Uint32Array(arr).sort(), min *= 2, n = arr.length / 2, i = -1;
    while (++i < n) res += Math.min(min, arr[i]);
    return res;
}
