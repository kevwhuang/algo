// 1556 - Thousand Separator

function thousandSeparator(n) {
    n = String(n);
    let idx = n.length % 3, s = n.slice(0, idx);
    const lim = n.length / 3 >> 0;
    for (let i = 0; i < lim; i++) {
        s += '.' + n.slice(idx, idx += 3);
    }
    return s[0] === '.' ? s.slice(1) : s;
}
