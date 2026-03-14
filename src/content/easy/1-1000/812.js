// 812 - Largest Triangle Area

function largestTriangleArea(points) {
    function calc(a, b, c) {
        const prod1 = a[0] * (b[1] - c[1]);
        const prod2 = b[0] * (c[1] - a[1]);
        const prod3 = c[0] * (a[1] - b[1]);
        return Math.abs(prod1 + prod2 + prod3) / 2;
    }
    let res = 0;
    const n = points.length;
    for (let i = 0; i < n - 2; i++) {
        const a = points[i];
        for (let j = i + 1; j < n; j++) {
            const b = points[j];
            for (let k = j + 1; k < n; k++) {
                res = Math.max(calc(a, b, points[k]), res);
            }
        }
    }
    return res;
}
