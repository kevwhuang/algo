// 2055 - Plates Between Candles

function platesBetweenCandles(s, queries) {
    function binarySearchAtLeast(l, r, target) {
        if (indices[r] < target) return -1;
        while (l <= r) {
            const m = l + r >> 1;
            if (indices[m] < target) l = m + 1;
            else if (indices[m] > target) r = m - 1;
            else return m;
        }
        return l;
    }
    function binarySearchAtMost(l, r, target) {
        if (indices[l] > target) return -1;
        while (l <= r) {
            const m = l + r >> 1;
            if (indices[m] < target) l = m + 1;
            else if (indices[m] > target) r = m - 1;
            else return m;
        }
        return r;
    }
    const indices = [];
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '|') indices.push(i);
    }
    const len = indices.length;
    if (len < 2) return new Array(queries.length).fill(0);
    for (let i = 0; i < queries.length; i++) {
        const first = binarySearchAtLeast(0, len - 1, queries[i][0]);
        if (first === -1) { queries[i] = 0; continue; }
        const last = binarySearchAtMost(first, len - 1, queries[i][1]);
        if (last === -1) { queries[i] = 0; continue; }
        const plates = indices[last] - indices[first] + first - last;
        queries[i] = Math.max(plates, 0);
    }
    return queries;
}
