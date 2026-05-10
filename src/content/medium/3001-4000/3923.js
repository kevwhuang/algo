// 3923. Minimum Generations to Target Point

function minGenerations(points, target) {
    const set1 = new Set();
    points.forEach(e => set1.add(e[0] << 6 | e[1] << 3 | e[2]));
    const tgt = target[0] << 6 | target[1] << 3 | target[2];
    if (set1.has(tgt)) return 0;
    let acc = 1, set2 = new Set(set1);
    while (true) {
        const N = new Set();
        for (const e of set1) {
            const a = e >> 6 & 7, b = e >> 3 & 7, c = e & 7;
            for (const f of set2) {
                const aa = f >> 6 & 7, bb = f >> 3 & 7, cc = f & 7;
                const next = a + aa >> 1 << 6 | b + bb >> 1 << 3 | c + cc >> 1;
                if (next === tgt) return acc;
                if (!set1.has(next)) N.add(next);
            }
        }
        if (N.size === 0) return -1;
        N.forEach(e => set1.add(e));
        acc++, set2 = N;
    }
}
