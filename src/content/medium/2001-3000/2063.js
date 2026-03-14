// 2063 - Vowels of All Substrings

function countVowels(word) {
    let count = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const n = word.length;
    for (let i = 0; i < n; i++) {
        if (!vowels.has(word[i])) continue;
        count += n + i * (n - i - 1);
    }
    return count;
}
