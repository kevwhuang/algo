// 1616 - Split Two Strings to Make Palindrome

function checkPalindromeFormation(a, b) {
    function checkPalindrome(s1, s2) {
        let l = 0, r = a.length - 1;
        while (l < r && s1[l] === s2[r]) l++, r--;
        return isPalindrome(a, l, r) || isPalindrome(b, l, r);
    }
    function isPalindrome(s, l, r) {
        while (l < r && s[l] === s[r]) l++, r--;
        return l >= r;
    }
    return checkPalindrome(a, b) || checkPalindrome(b, a);
}
