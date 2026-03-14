// 1332 - Remove Palindromic Subsequences

function removePalindromeSub(s) {
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l++] !== s[r--]) return 2;
    }
    return 1;
}
