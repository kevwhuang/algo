// 4007. Widest Possible Fence

function maximumWidth(planks) {
    const B1 = new Map(), B2 = new Map();
    for (let i = 0; i < planks.length; i++) {
        B1.set(planks[i], (B1.get(planks[i]) ?? 0) + 1);
    }
    for (const e1 of B1) {
        const a = e1[0], b = e1[1];
        B2.set(a, (B2.get(a) ?? 0) + b);
        B2.set(a + a, (B2.get(a + a) ?? 0) + (b >> 1));
        for (const e2 of B1) {
            const c = e2[0], d = e2[1];
            if (a === c) break;
            B2.set(a + c, (B2.get(a + c) ?? 0) + Math.min(b, d));
        }
    }
    let res = 0;
    for (const e of B2.values()) {
        res = Math.max(e, res);
    }
    return res;
}
