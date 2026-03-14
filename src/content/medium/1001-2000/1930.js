// 1930 - Unique Length-3 Palindromic Subsequences

function countPalindromicSubsequence(s) {
    let palindromes = 0;
    const set = new Set(s);
    for (const char1 of set.keys()) {
        const left = s.indexOf(char1);
        const right = s.lastIndexOf(char1);
        if (left + 1 >= right) continue;
        for (const char2 of set.keys()) {
            const mid = s.indexOf(char2, left + 1);
            if (left < mid && mid < right) palindromes++;
        }
    }
    return palindromes;
}
