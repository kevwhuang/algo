// 939 - Minimum Area Rectangle

function minAreaRect(points) {
    const map = new Map(), len = points.length;
    for (let i = 0; i < len; i++) {
        const x = points[i][0], y = points[i][1];
        if (map.has(x)) map.get(x).add(y);
        else map.set(x, new Set([y]));
    }
    let min = Infinity;
    for (let i = 0; i < len; i++) {
        const x1 = points[i][0], y1 = points[i][1];
        for (let j = i + 1; j < len; j++) {
            const x2 = points[j][0], y2 = points[j][1];
            if (x1 === x2 || y1 === y2) continue;
            const area = Math.abs((x1 - x2) * (y1 - y2));
            if (area >= min) continue;
            if (!map.get(x1).has(y2)) continue;
            if (!map.get(x2).has(y1)) continue;
            min = area;
        }
    }
    return min === Infinity ? 0 : min;
}
