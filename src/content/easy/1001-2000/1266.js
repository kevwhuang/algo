// 1266 - Minimum Time Visiting All Points

function minTimeToVisitAllPoints(points) {
    let time = 0;
    for (let i = 1; i < points.length; i++) {
        const dr = Math.abs(points[i][0] - points[i - 1][0]);
        const dc = Math.abs(points[i][1] - points[i - 1][1]);
        time += Math.max(dr, dc);
    }
    return time;
}
