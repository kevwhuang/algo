// 3856 - Trim Trailing Vowels

function trimTrailingVowels(s) {
    const A = ['a', 'e', 'i', 'o', 'u'];
    let i = s.length - 1;
    while (~i && A.includes(s[i])) i--;
    return s.slice(0, i + 1);
}
