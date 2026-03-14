// 2152 - Minimum Number of Lines to Cover Points

function minimumLines(points) {
    const map = new Map(), n = points.length;
    for (let i = 0; i < n; i++) {
        const r = points[i][1], c = points[i][0];
        for (let j = i + 1; j < n; j++) {
            const rr = points[j][1], cc = points[j][0];
            const a = c === cc ? null : (r - rr) / (c - cc);
            const b = a === null ? c : r - a * c;
            const key = `${a},${b}`;
            if (!map.has(key)) map.set(key, new Set());
            map.get(key).add(`${r},${c}`).add(`${rr},${cc}`);
        }
    }
    let res = Math.ceil(n / 2);
    const arr = [];
    map.forEach(e => e.size > 2 && arr.push(e));
    for (let mask = 1; mask < 1 << arr.length; mask++) {
        const set = new Set();
        for (let i = 0; i < arr.length; i++) {
            if (1 << i & mask) arr[i].forEach(e => set.add(e));
        }
        let acc = Math.ceil((n - set.size) / 2), cur = mask;
        while (cur) acc += cur & 1, cur >>= 1;
        res = Math.min(acc, res);
    }
    return res;
}
