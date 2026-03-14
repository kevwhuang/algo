// 2250 - Count Number of Rectangles Containing Each Point

function countRectangles(rectangles, points) {
    for (let i = 0; i < points.length; i++) {
        rectangles.push(points[i]);
        points[i].push(i);
    }
    rectangles.sort((a, b) => b[0] - a[0]);
    const arr = new Uint16Array(101);
    for (let i = 0; i < rectangles.length; i++) {
        let height = rectangles[i][1];
        if (rectangles[i].length === 2) {
            while (height) arr[height--]++;
        } else {
            points[rectangles[i][2]] = arr[height];
        }
    }
    return points;
}
