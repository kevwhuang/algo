// 2697 - Lexicographically Smallest Palindrome

function makeSmallestPalindrome(s) {
    const res = new Array(s.length);
    let l = 0, r = s.length - 1;
    while (l <= r) {
        if (s[l] < s[r]) {
            res[l] = s[l];
            res[r--] = s[l++];
        } else {
            res[r] = s[r];
            res[l++] = s[r--];
        }
    }
    return res.join('');
}
