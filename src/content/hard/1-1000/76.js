// 76 - Minimum Window Substring

function minWindow(s, t) {
    if (s.length < t.length) return '';
    const B = new Uint32Array(58);
    for (let i = 0; i < t.length; i++) {
        B[t.charCodeAt(i) - 65]++;
    }
    let left = 0, right = Infinity, l = 0, r = -1;
    let acc = B.reduce((s, e) => s + (e > 0), 0);
    while (++r < s.length) {
        if (--B[s.charCodeAt(r) - 65] === 0) acc--;
        while (acc === 0) {
            if (r - l < right - left) left = l, right = r;
            if (B[s.charCodeAt(l++) - 65]++ === 0) acc++;
        }
    }
    return right - left === Infinity ? '' : s.slice(left, right + 1);
}
