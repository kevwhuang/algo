// 424 - Longest Repeating Character Replacement

function characterReplacement(s, k) {
    let res = 1, max = k, l = 0, r = -1;
    const B = new Uint32Array(26);
    while (++r < s.length) {
        max = Math.max(++B[s.charCodeAt(r) - 65] + k, max);
        if (r - l === max) B[s.charCodeAt(l++) - 65]--;
        res = Math.max(r - l + 1, res);
    }
    return res;
}
