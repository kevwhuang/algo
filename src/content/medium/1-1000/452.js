// 452 - Minimum Number of Arrows to Burst Balloons

function findMinArrowShots(points) {
    points.sort((a, b) => a[1] - b[1]);
    let arrows = 0;
    for (let i = 0; i < points.length; i++) {
        const bound = points[i][1];
        while (points[i + 1]?.[0] <= bound) i++;
        arrows++;
    }
    return arrows;
}
