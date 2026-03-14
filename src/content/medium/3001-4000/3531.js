// 3531 - Count Covered Buildings

function countCoveredBuildings(n, buildings) {
    const min1 = new Uint32Array(n + 1).fill(-1);
    const min2 = new Uint32Array(n + 1).fill(-1);
    const max1 = new Uint32Array(n + 1);
    const max2 = new Uint32Array(n + 1);
    for (let i = 0; i < buildings.length; i++) {
        const r = buildings[i][0], c = buildings[i][1];
        min1[r] = Math.min(c, min1[r]);
        min2[c] = Math.min(r, min2[c]);
        max1[r] = Math.max(c, max1[r]);
        max2[c] = Math.max(r, max2[c]);
    }
    let res = 0;
    for (let i = 0; i < buildings.length; i++) {
        const r = buildings[i][0], c = buildings[i][1];
        if (r <= min2[c] || r >= max2[c]) continue;
        if (c <= min1[r] || c >= max1[r]) continue;
        res++;
    }
    return res;
}
