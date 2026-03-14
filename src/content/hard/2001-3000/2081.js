// 2081 - Sum of K-Mirror Numbers

function kMirror(k, n) {
    function fn(a, b, k) {
        while (a) b = k * b + a % k, a = Math.floor(a / k);
        return b;
    }
    let res = 0, i = 0;
    while (++i) {
        const b = 10 ** (i + 1 >> 1), c = 10 ** (i >> 1);
        for (let a = 10 ** (i - 1 >> 1); a < b; a++) {
            const d = c * a + fn(i & 1 ? a / 10 | 0 : a, 0, 10);
            if (d === fn(d, 0, k) && (res += d) && --n === 0) return res;
        }
    }
}
