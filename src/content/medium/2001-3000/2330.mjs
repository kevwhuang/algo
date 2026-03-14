// 2330 - Valid Palindrome IV

function makePalindrome(s) {
    let l = 0, r = s.length - 1, ops = 0;
    while (l < r) {
        if (s[l++] !== s[r--]) ops++;
        if (ops === 3) return false;
    }
    return true;
}
