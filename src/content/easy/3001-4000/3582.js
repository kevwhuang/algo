// 3582 - Generate Tag for Video Caption

function generateTag(caption) {
    let res = '#', i = 0;
    const s = caption, n = s.length;
    while (res.length < 100 && i < n) {
        if (res.length > 1) res += s[i++].toUpperCase();
        while (res.length < 100 && i < n && s[i] !== ' ') {
            res += s[i++].toLowerCase();
        }
        while (++i < n && s[i] === ' ') { }
    }
    return res;
}
