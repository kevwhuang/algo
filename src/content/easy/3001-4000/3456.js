// 3456 - Find Special Substring of Length K

function hasSpecialSubstring(s, k) {
    let res = 0, i = -1;
    while (++i < s.length) {
        if (i && s[i - 1] === s[i] && res++) continue;
        if (res === k) return true;
        res = 1;
    }
    return res === k;
}
