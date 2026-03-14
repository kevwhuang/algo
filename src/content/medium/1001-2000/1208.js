// 1208 - Get Equal Substrings Within Budget

function equalSubstring(s, t, maxCost) {
    const indices = new Uint8Array(s.length);
    for (let i = 0; i < s.length; i++) {
        indices[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }
    let max = 0, acc = 0;
    for (let l = 0, r = 0; r < s.length; r++) {
        acc += indices[r];
        while (l <= r && acc > maxCost) acc -= indices[l++];
        max = Math.max(r - l + 1, max);
    }
    return max;
}
