// 1456 - Maximum Number of Vowels in a Substring of Given Length

function maxVowels(s, k) {
    function isVowel(char) {
        if (char === 'a' || char === 'e' || char === 'i') return true;
        else if (char === 'o' || char === 'u') return true;
        return false;
    }
    let cur = 0;
    for (let i = 0; i < k; i++) {
        if (isVowel(s[i])) cur++;
    }
    let max = cur;
    for (let i = k; i < s.length; i++) {
        if (isVowel(s[i - k])) cur--;
        if (isVowel(s[i])) cur++;
        max = Math.max(cur, max);
    }
    return max;
}
