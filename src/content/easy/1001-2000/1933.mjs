// 1933 - Check If String Is Decomposable Into Value-Equal Substrings

function isDecomposable(s) {
    let seen = false, i = 0;
    const n = s.length;
    while (i < n) {
        if (i + 1 === n || s[i] !== s[i + 1]) return false;
        if (i + 2 < n && s[i] === s[i + 2]) i += 3;
        else if (!seen) seen = true, i += 2;
        else return false;
    }
    return seen;
}
