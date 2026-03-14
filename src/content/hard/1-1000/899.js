// 899 - Orderly Queue

function orderlyQueue(s, k) {
    if (k > 1) return s.split``.sort().join``;
    let res = s, i = 0;
    while (++i < s.length) {
        const t = s.slice(i) + s.slice(0, i);
        if (t < res) res = t;
    }
    return res;
}
