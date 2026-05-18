// 214. Shortest Palindrome

function shortestPalindrome(s) {
    if (this.lps === undefined) lps = new Uint16Array(50000);
    let l = 0, r = 1;
    while (r < s.length) {
        if (s[l] === s[r]) lps[r++] = ++l;
        else if (l) l = lps[l - 1];
        else r++;
    }
    let i = 0;
    for (let j = s.length - 1; ~j; j--) {
        while (i && s[i] !== s[j]) i = lps[i - 1];
        if (s[i] === s[j]) i++;
    }
    let res = '';
    for (let j = s.length - 1; j >= i; j--) {
        res += s[j];
    }
    return res + s;
}
