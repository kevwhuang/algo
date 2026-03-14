// 3143 - Maximum Points Inside the Square

function maxPointsInsideSquare(points, s) {
    for (let i = 0; i < points.length; i++) {
        const x = points[i][0], y = points[i][1];
        points[i][0] = Math.max(Math.abs(x), Math.abs(y));
        points[i][1] = i;
    }
    points.sort((a, b) => a[0] - b[0]);
    let i = 0;
    const seen = new Set();
    while (i < points.length) {
        if (seen.has(s[points[i][1]])) {
            const size = points[i][0];
            while (i && points[i - 1][0] === size) i--;
            break;
        }
        seen.add(s[points[i++][1]]);
    }
    return i;
}
