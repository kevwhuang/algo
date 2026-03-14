// 409 - Longest Palindrome

function longestPalindrome(s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    let len = 0, odd = false;
    for (const freq of map.values()) {
        if (freq & 1) len += freq - 1, odd = true;
        else len += freq;
    }
    return len + odd;
}
