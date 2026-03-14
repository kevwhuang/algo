// 1961 - Check If String Is a Prefix of Array

function isPrefixString(s, words) {
    let i = 0, j = -1;
    const m = s.length, n = words.length;
    while (i < m && ++j < n) {
        const t = words[j], nn = t.length;
        let k = 0;
        while (i < m && k < nn && s[i] === t[k]) i++, k++;
        if (k < nn) return false;
    }
    return i === m;
}
