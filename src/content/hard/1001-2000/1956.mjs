// 1956 - Minimum Time for K Virus Variants to Spread

function minDayskVariants(points, k) {
    let x1 = 100, y1 = 100, x2 = 1, y2 = 1;
    for (let i = 0; i < points.length; i++) {
        const x = points[i][0], y = points[i][1];
        x1 = Math.min(x, x1);
        y1 = Math.min(y, y1);
        x2 = Math.max(x, x2);
        y2 = Math.max(y, y2);
    }
    let l = 0, r = 99;
    while (l <= r) {
        let max = 1;
        const m = l + r >> 1;
        for (let x = x1; x <= x2; x++) {
            for (let y = y1; y <= y2; y++) {
                let acc = 0;
                for (let i = 0; i < points.length; i++) {
                    const xx = points[i][0], yy = points[i][1];
                    if (Math.abs(xx - x) + Math.abs(yy - y) <= m) acc++;
                }
                max = Math.max(acc, max);
                if (max >= k) x = y = 101;
            }
        }
        if (max < k) l = m + 1;
        else r = m - 1;
    }
    return l;
}
