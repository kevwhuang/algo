// 149 - Max Points on a Line

function maxPoints(points) {
    let res = 1, i = -1;
    const n = points.length;
    while (++i < n) {
        const map = new Map(), r = points[i][1], c = points[i][0];
        for (let j = i + 1; j < n; j++) {
            const rr = points[j][1], cc = points[j][0];
            const div = c === cc ? Infinity : (r - rr) / (c - cc);
            map.set(div, (map.get(div) ?? 1) + 1);
            res = Math.max(map.get(div), res);
        }
    }
    return res;
}
