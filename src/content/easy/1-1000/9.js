// 9 - Palindrome Number

function isPalindrome(x) {
    if (x < 0) return false;
    x = x.toString();
    let l = 0, r = x.length - 1;
    while (l < r) if (x[l++] !== x[r--]) return false;
    return true;
}
