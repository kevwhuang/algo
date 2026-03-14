// 2249 - Count Lattice Points Inside a Circle

function countLatticePoints(circles) {
    circles.sort((a, b) => b[2] - a[2]);
    let xMin = 100, xMax = 1, yMin = 100, yMax = 1;
    for (let i = 0; i < circles.length; i++) {
        const rad = circles[i][2];
        xMin = Math.min(circles[i][0] - rad, xMin);
        xMax = Math.max(circles[i][0] + rad, xMax);
        yMin = Math.min(circles[i][1] - rad, yMin);
        yMax = Math.max(circles[i][1] + rad, yMax);
    }
    let points = 0;
    for (let r = yMin; r <= yMax; r++) {
        for (let c = xMin; c <= xMax; c++) {
            for (let i = 0; i < circles.length; i++) {
                const dr = r - circles[i][1];
                const dc = c - circles[i][0];
                if (Math.sqrt(dr ** 2 + dc ** 2) <= circles[i][2]) {
                    points++;
                    break;
                }
            }
        }
    }
    return points;
}
