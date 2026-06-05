// 3947. Maximum Number of Items From Sale II

function maximumSaleItems(items, budget) {
    if (!this.B) B = new Uint32Array(100001);
    B.fill(0, 1, items.length + 1);
    const map1 = new Map(), M1 = items, n = M1.length;
    let max = 1, min = 1e9;
    for (let i = 0; i < n; i++) {
        const a = M1[i][0];
        map1.set(a, 0);
        B[a]++, max = Math.max(a, max), min = Math.min(M1[i][1], min);
    }
    for (const d of map1.keys()) {
        let sum = -1, i = d;
        while (i <= max) sum += B[i], i += d;
        map1.set(d, sum);
    }
    const map2 = new Map(), tgt = 2 * min;
    for (let i = 0; i < n; i++) {
        const a = M1[i][0], b = M1[i][1];
        if (!map1.get(a) || b > tgt) continue;
        map2.set(b, (map2.get(b) ?? 0) + map1.get(a));
    }
    let res = 0;
    const M2 = [...map2].sort((a, b) => a[0] - b[0]);
    for (let i = 0; budget && i < M2.length; i++) {
        const min = Math.min(budget / M2[i][0] | 0, M2[i][1]);
        res += 2 * min, budget -= M2[i][0] * min;
    }
    return res + budget / min | 0;
}
