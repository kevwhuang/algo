// 1637 - Widest Vertical Area Between Two Points Containing No Points

function maxWidthOfVerticalArea(points) {
    points.sort((a, b) => a[0] - b[0]);
    let widest = -Infinity;
    for (let i = 1; i < points.length; i++) {
        widest = Math.max(points[i][0] - points[i - 1][0], widest);
    }
    return widest;
}
