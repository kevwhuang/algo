// 3227 - Vowels Game in a String

function doesAliceWin(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) return true;
    }
    return false;
}
