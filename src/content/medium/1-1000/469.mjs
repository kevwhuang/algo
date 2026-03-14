// 469 - Convex Polygon

function isConvex(points) {
    points.push(points[0], points[1]);
    let pos, neg;
    for (let i = 2; i < points.length; i++) {
        const x1 = points[i - 2][0], y1 = points[i - 2][1];
        const x2 = points[i - 1][0], y2 = points[i - 1][1];
        const x3 = points[i][0], y3 = points[i][1];
        const cross = (x1 - x2) * (y3 - y2) - (x3 - x2) * (y1 - y2);
        if (cross > 0) pos = true;
        else if (cross < 0) neg = true;
        if (pos && neg) return false;
    }
    return true;
}
