// 963 - Minimum Area Rectangle II

function minAreaFreeRect(points) {
    function isOrthogonal(p1, p2, p3) {
        const t1 = (p2[0] - p1[0]) * (p3[0] - p1[0]);
        const t2 = (p2[1] - p1[1]) * (p3[1] - p1[1]);
        return t1 + t2 === 0;
    }
    function calculateArea(p1, p2, p3) {
        const d1 = Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
        const d2 = Math.sqrt((p3[0] - p1[0]) ** 2 + (p3[1] - p1[1]) ** 2);
        return d1 * d2;
    }
    const set = new Set(), len = points.length;
    for (let i = 0; i < len; i++) {
        set.add(`${points[i][0]}-${points[i][1]}`);
    }
    let min = Infinity;
    for (let i = 0; i < len - 2; i++) {
        const p1 = points[i];
        for (let j = i + 1; j < len - 1; j++) {
            const p2 = points[j];
            for (let k = j + 1; k < len; k++) {
                const p3 = points[k];
                if (!isOrthogonal(p1, p2, p3)) continue;
                const p4x = p2[0] + p3[0] - p1[0];
                const p4y = p2[1] + p3[1] - p1[1];
                if (!set.has(`${p4x}-${p4y}`)) continue;
                min = Math.min(calculateArea(p1, p2, p3), min);
            }
        }
    }
    return min === Infinity ? 0 : min;
}
