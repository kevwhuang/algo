// 3344 - Maximum Sized Array

function maxSizedArray(s) {
    function init(i) {
        ps = new Uint32Array(1197);
        while (++i < 1196) {
            let acc = 0, j = -1;
            while (i > ++j) acc += i | j;
            ps[i + 1] = ps[i] + acc + acc + i;
        }
    }
    if (this.ps === undefined) init(0);
    let l = 1, r = s ** .22 + 1 >> 0;
    while (l <= r) {
        const m = l + r >> 1;
        if (ps[m] * m * (m - 1) / 2 <= s) l = m + 1;
        else r = m - 1;
    }
    return r;
}
