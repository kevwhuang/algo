// 391 - Perfect Rectangle

function isRectangleCover(rectangles) {
    const check = key => set.has(key) ? set.delete(key) : set.add(key);
    let acc = 0, min1 = 1e6, min2 = 1e6, max1 = -1e6, max2 = -1e6;
    const set = new Set();
    for (let i = 0; i < rectangles.length; i++) {
        const a = rectangles[i][0], b = rectangles[i][1];
        const c = rectangles[i][2], d = rectangles[i][3];
        acc += (c - a) * (d - b);
        min1 = Math.min(a, min1), min2 = Math.min(b, min2);
        max1 = Math.max(c, max1), max2 = Math.max(d, max2);
        check(`${a}-${b}`);
        check(`${a}-${d}`);
        check(`${c}-${b}`);
        check(`${c}-${d}`);
    }
    if (acc !== (max1 - min1) * (max2 - min2)) return false;
    if (set.size !== 4) return false;
    if (!set.has(`${min1}-${min2}`)) return false;
    if (!set.has(`${min1}-${max2}`)) return false;
    if (!set.has(`${max1}-${min2}`)) return false;
    return set.has(`${max1}-${max2}`);
}
