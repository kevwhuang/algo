// 2781 - Length of the Longest Valid Substring

function longestValidSubstring(word, forbidden) {
    let res = 0, l = 0, r = 0;
    const set = new Set(forbidden);
    while (r < word.length) {
        let s = '', i = ++r;
        const max = Math.max(l, r - 10);
        while (--i >= max) {
            s = word[i] + s;
            if (set.has(s)) l = i + 1, i = 0;
        }
        res = Math.max(r - l, res);
    }
    return res;
}
