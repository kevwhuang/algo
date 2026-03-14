// 1274 - Number of Ships in a Rectangle

function countShips(sea, topRight, bottomLeft) {
    if (!sea.hasShips(topRight, bottomLeft)) return 0;
    const r1 = bottomLeft[0], r2 = topRight[0];
    const c1 = bottomLeft[1], c2 = topRight[1];
    if (r1 === r2 && c1 === c2) return 1;
    const m1 = r1 + r2 >> 1, m2 = c1 + c2 >> 1;
    const a = countShips(sea, [m1, m2], bottomLeft);
    const b = countShips(sea, [m1, c2], [r1, m2 + 1]);
    const c = countShips(sea, [r2, m2], [m1 + 1, c1]);
    const d = countShips(sea, topRight, [m1 + 1, m2 + 1]);
    return a + b + c + d;
}
