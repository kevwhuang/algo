// 1401 - Circle and Rectangle Overlapping

function checkOverlap(radius, xCenter, yCenter, x1, y1, x2, y2) {
    const dx = Math.max(0, x1 - xCenter, xCenter - x2);
    const dy = Math.max(0, y1 - yCenter, yCenter - y2);
    return Math.sqrt(dx * dx + dy * dy) <= radius;
}
