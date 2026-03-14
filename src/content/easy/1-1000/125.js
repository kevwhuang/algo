// 125 - Valid Palindrome

function isPalindrome(s) {
    s = s.replace(/[\W_]/g, '').toLowerCase();
    let l = 0, r = s.length - 1;
    while (l < r) if (s[l++] !== s[r--]) return false;
    return true;
}
