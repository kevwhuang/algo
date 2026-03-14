// 3537 - Fill a Special Grid

function specialGrid(n) {
    function fn(r, c, d) {
        if (d === 1) return res[r][c] = cur++;
        d /= 2;
        fn(r, c + d, d);
        fn(r + d, c + d, d);
        fn(r + d, c, d);
        fn(r, c, d);
    }
    n = 2 ** n;
    const res = Array.from({ length: n }, () => new Uint32Array(n));
    let cur = 0;
    fn(0, 0, n);
    return res;
}
