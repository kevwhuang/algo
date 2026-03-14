// 1488 - Avoid Flood in the City

function avoidFlood(rains) {
    const arr = [], map = new Map();
    for (let i = 0; i < rains.length; i++) {
        if (rains[i] === 0) { arr.push(i); continue; }
        if (map.has(rains[i])) {
            let l = 0, r = arr.length - 1;
            const tgt = map.get(rains[i]);
            while (l <= r) {
                const m = l + r >> 1;
                if (arr[m] < tgt) l = m + 1;
                else r = m - 1;
            }
            if (l === arr.length) return [];
            map.delete(rains[i]);
            rains[arr.splice(l, 1)[0]] = rains[i];
        }
        map.set(rains[i], i);
        rains[i] = -1;
    }
    for (let i = 0; i < arr.length; i++) {
        rains[arr[i]] = 1;
    }
    return rains;
}
