// 3517 - Smallest Palindromic Rearrangement I

function smallestPalindrome(s) {
    const B = new Uint32Array(26);
    for (let i = 0; i < s.length; i++) {
        B[s.charCodeAt(i) - 97]++;
    }
    const arr = [];
    for (let i = 0; i < 26; i++) {
        if (B[i]) arr.push(String.fromCharCode(i + 97).repeat(B[i] >> 1));
    }
    const t = s.length % 2 ? s[s.length >> 1] : '';
    return `${arr.join``}${t}${arr.reverse().join``}`;
}
