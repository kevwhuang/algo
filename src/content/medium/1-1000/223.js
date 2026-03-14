// 223 - Rectangle Area

function computeArea(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    const areaA = (ax2 - ax1) * (ay2 - ay1);
    const areaB = (bx2 - bx1) * (by2 - by1);
    const cx1 = Math.max(ax1, bx1);
    const cy1 = Math.max(ay1, by1);
    const cx2 = Math.min(ax2, bx2);
    const cy2 = Math.min(ay2, by2);
    const areaC = cx1 <= cx2 && cy1 <= cy2 ? (cx2 - cx1) * (cy2 - cy1) : 0;
    return areaA + areaB - areaC;
}
