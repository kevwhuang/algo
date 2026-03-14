// 1540 - Can Convert String in K Moves

function canConvertString(s, t, k) {
    if (s.length !== t.length) return false;
    const next = new Uint32Array(26);
    for (let i = 1; i < 26; i++) {
        next[i] = i;
    }
    for (let i = 0; i < s.length; i++) {
        let shift = t.charCodeAt(i) - s.charCodeAt(i);
        if (shift === 0) continue;
        if (shift < 0) shift += 26;
        if (next[shift] > k) return false;
        next[shift] += 26;
    }
    return true;
}
