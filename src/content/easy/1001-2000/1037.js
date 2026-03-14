// 1037 - Valid Boomerang

function isBoomerang(points) {
    const x1 = points[0][0], y1 = points[0][1];
    const x2 = points[1][0], y2 = points[1][1];
    const x3 = points[2][0], y3 = points[2][1];
    const a = (x1 - x2) / (y1 - y2);
    const b = (x1 - x3) / (y1 - y3);
    const c = (x2 - x3) / (y2 - y3);
    if (isNaN(a) || isNaN(b) || isNaN(c)) return false;
    return a !== b && a !== c && b !== c;
}
