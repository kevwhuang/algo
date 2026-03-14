// 1528 - Shuffle String

function restoreString(s, indices) {
    const res = new Array(s.length);
    for (let i = 0; i < s.length; i++) {
        res[indices[i]] = s[i];
    }
    return res.join('');
}
