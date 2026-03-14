// 927 - Three Equal Parts

function threeEqualParts(arr) {
    const div = arr.reduce((s, e) => s + e) / 3;
    const tgt1 = div + 1, tgt2 = tgt1 + div, n = arr.length;
    if (div === 0) return [0, n - 1];
    if (div > (div | 0)) return [-1, -1];
    let acc = 0, l, m, r = 0;
    while (acc < tgt2) {
        if (arr[r++] === 0) continue;
        if (++acc === 1) l ??= r;
        else if (acc === tgt1) m ??= r;
    }
    while (r < n && arr[l] === arr[m] && arr[m] === arr[r]) l++, m++, r++;
    return r === n ? [l - 1, m] : [-1, -1];
}
