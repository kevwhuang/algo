// 3890. Integers With Multiple Sum of Two Cubes

function findGoodIntegers(n) {
    function init() {
        const dict = [null], k = Math.cbrt(1e9) >> 0;
        for (let a = 1; a < k; a++) {
            dict.push(a ** 3);
        }
        const set1 = new Set(), set2 = new Set();
        for (let a = 1; a < k; a++) {
            for (let b = a; b < k; b++) {
                const sum = dict[a] + dict[b];
                if (sum > 1e9) break;
                if (set1.has(sum)) set2.add(sum);
                else set1.add(sum);
            }
        }
        A = new Uint32Array(set2.keys()).sort();
    }
    if (!this.A) init();
    let l = 0, r = 1553;
    while (l <= r) {
        const m = l + r >> 1;
        if (A[m] <= n) l = m + 1;
        else r = m - 1;
    }
    return A.slice(0, l);
}
