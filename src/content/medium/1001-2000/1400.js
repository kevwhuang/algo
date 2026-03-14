// 1400 - Construct K Palindrome Strings

function canConstruct(s, k) {
    if (s.length < k) return false;
    const bucket = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        bucket[s.charCodeAt(i) - 97]++;
    }
    let odds = 0;
    for (let i = 0; i < 26; i++) {
        if (bucket[i] & 1) odds++;
    }
    return odds <= k;
}
