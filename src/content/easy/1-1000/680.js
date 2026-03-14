// 680 - Valid Palindrome II

function validPalindrome(s) {
    function check(l, r) {
        while (++l < --r) {
            if (s[l] !== s[r]) return false;
        }
        return true;
    }
    let l = -1, r = s.length;
    while (++l < --r) {
        if (s[l] !== s[r]) return check(l, r + 1) || check(l - 1, r);
    }
    return true;
}
