// 1533 - Find the Index of the Large Integer

function getIndex(reader) {
    let l = 0, r = reader.length() - 1;
    while (l < r) {
        const d = (r - l) / 3 >> 0;
        const sign = reader.compareSub(l, l + d, r - d, r);
        if (sign > 0) r = l + d;
        else if (sign < 0) l = r - d;
        else l += d + 1, r -= d + 1;
    }
    return l;
}
