// 3047 - Find the Largest Area of Square Inside Two Rectangles

function largestSquareArea(bottomLeft, topRight) {
    let width = 0;
    const len = bottomLeft.length;
    for (let i = 0; i < len; i++) {
        const ax1 = bottomLeft[i][0], ay1 = bottomLeft[i][1];
        const ax2 = topRight[i][0], ay2 = topRight[i][1];
        for (let j = i + 1; j < len; j++) {
            const x1 = Math.max(ax1, bottomLeft[j][0]);
            const x2 = Math.min(ax2, topRight[j][0]);
            if (x1 > x2) continue;
            const y1 = Math.max(ay1, bottomLeft[j][1]);
            const y2 = Math.min(ay2, topRight[j][1]);
            if (y1 > y2) continue;
            width = Math.max(Math.min(x2 - x1, y2 - y1), width);
        }
    }
    return width * width;
}
