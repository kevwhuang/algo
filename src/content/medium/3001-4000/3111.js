// 3111 - Minimum Rectangles to Cover Points

function minRectanglesToCoverPoints(points, w) {
    points.sort((a, b) => a[0] - b[0]);
    let rectangles = 0, end;
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] <= end) continue;
        rectangles++, end = points[i][0] + w;
    }
    return rectangles;
}
