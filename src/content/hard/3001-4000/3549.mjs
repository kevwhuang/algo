// 3549 - Multiply Two Polynomials

function multiply(poly1, poly2) {
    function fn(arr1, arr2, k) {
        for (let cur, i = 1, j = 0; i < n; i++) {
            let mask = n / 2;
            while (j & mask) j ^= mask, mask /= 2;
            if (i >= (j ^= mask)) continue;
            cur = arr1[i], arr1[i] = arr1[j], arr1[j] = cur;
            cur = arr2[i], arr2[i] = arr2[j], arr2[j] = cur;
        }
        for (let d = 2, dd = 1; d <= n; d *= 2, dd *= 2) {
            const k1 = Math.cos(k * Math.PI / d);
            const k2 = Math.sin(k * Math.PI / d);
            for (let i = 0; i < n; i += d) {
                for (let a = 1, b = 0, j = 0; j < dd; j++) {
                    const ii = i + j, jj = ii + dd;
                    let aa = a * arr1[jj] - b * arr2[jj];
                    let bb = b * arr1[jj] + a * arr2[jj];
                    arr1[jj] = arr1[ii] - aa, arr1[ii] += aa;
                    arr2[jj] = arr2[ii] - bb, arr2[ii] += bb;
                    aa = a * k1 - b * k2, bb = a * k2 + b * k1;
                    a = aa, b = bb;
                }
            }
        }
    }
    const m1 = poly1.length, m2 = poly2.length, m3 = m1 + m2 - 1;
    const n = 2 ** Math.ceil(Math.log2(m3));
    const arr1 = new Float64Array(n), arr2 = new Float64Array(n);
    const arr3 = new Float64Array(n), arr4 = new Float64Array(n);
    poly1.forEach((e, i) => arr1[i] = e);
    poly2.forEach((e, i) => arr3[i] = e);
    fn(arr1, arr2, 2);
    fn(arr3, arr4, 2);
    for (let i = 0; i < n; i++) {
        const a = arr1[i], b = arr2[i], c = arr3[i], d = arr4[i];
        arr1[i] = a * c - b * d, arr2[i] = a * d + b * c;
    }
    fn(arr1, arr2, -2);
    return Array.from({ length: m3 }, (_, i) => Math.round(arr1[i] / n));
}
