// 3380 - Maximum Area Rectangle With Point Constraints I

function maxRectangleArea(points) {
    let max = -1;
    const M = points, n = M.length;
    for (let a = 0; a < n; a++) {
        const x1 = M[a][0], y1 = M[a][1];
        for (let b = a + 1; b < n; b++) {
            const x2 = M[b][0], y2 = M[b][1];
            if (x1 === x2 || y1 === y2) continue;
            let c = 0, d = 0, e = -1;
            while (c < n && (M[c][0] !== x1 || M[c][1] !== y2)) c++;
            if (c === n) continue;
            while (d < n && (M[d][0] !== x2 || M[d][1] !== y1)) d++;
            if (d === n) continue;
            const xMin = Math.min(x1, x2), xMax = Math.max(x1, x2);
            const yMin = Math.min(y1, y2), yMax = Math.max(y1, y2);
            while (++e < n) {
                if (e === a || e === b || e === c || e === d) continue;
                const x3 = M[e][0], y3 = M[e][1];
                if (xMin <= x3 && x3 <= xMax && yMin <= y3 && y3 <= yMax) break;
            }
            if (e === n) max = Math.max((xMax - xMin) * (yMax - yMin), max);
        }
    }
    return max;
}
