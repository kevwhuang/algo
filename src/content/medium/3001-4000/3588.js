// 3588 - Find Maximum Area of a Triangle

function maxArea(coords) {
    const map1 = new Map(), map2 = new Map();
    const map3 = new Map(), map4 = new Map();
    let min1 = Infinity, min2 = Infinity, max1 = 0, max2 = 0, i = -1;
    while (++i < coords.length) {
        const r = coords[i][0], c = coords[i][1];
        map1.set(r, Math.min(c, map1.get(r) ?? Infinity));
        map2.set(c, Math.min(r, map2.get(c) ?? Infinity));
        map3.set(r, Math.max(c, map3.get(r) ?? 0));
        map4.set(c, Math.max(r, map4.get(c) ?? 0));
        min1 = Math.min(r, min1), min2 = Math.min(c, min2);
        max1 = Math.max(r, max1), max2 = Math.max(c, max2);
    }
    let res = 0;
    for (const e of map3) {
        const d = e[1] - map1.get(e[0]);
        res = Math.max(d * (e[0] - min1), d * (max1 - e[0]), res);
    }
    for (const e of map4) {
        const d = e[1] - map2.get(e[0]);
        res = Math.max(d * (e[0] - min2), d * (max2 - e[0]), res);
    }
    return res || -1;
}
