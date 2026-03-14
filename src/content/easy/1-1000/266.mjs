// 266 - Palindrome Permutation

function canPermutePalindrome(s) {
    const B = new Uint16Array(26);
    for (let i = 0; i < s.length; i++) {
        B[s.charCodeAt(i) - 97]++;
    }
    for (let flag, i = 0; i < 26; i++) {
        if (B[i] % 2 === 0) continue;
        if (flag) return false;
        flag = true;
    }
    return true;
}
