// 4030. Check ASCII Palindromic

function isPalindromic(s) {
    let t = '';
    for (let i = 0; i < s.length; i++) {
        t += s.charCodeAt(i).toString(2).padStart(8, '0');
    }
    let l = 0, r = t.length - 1;
    while (l < r) if (t[l++] !== t[r--]) return false;
    return true;
}
