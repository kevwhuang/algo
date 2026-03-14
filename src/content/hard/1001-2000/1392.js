// 1392 - Longest Happy Prefix

function longestPrefix(s) {
    const lps = new Uint32Array(s.length);
    let l = 0, r = 1;
    while (r < s.length) {
        if (s[l] === s[r]) lps[r++] = ++l;
        else if (l) l = lps[l - 1];
        else r++;
    }
    return s.slice(0, lps.at(-1));
}
