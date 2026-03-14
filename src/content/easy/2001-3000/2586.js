// 2586 - Count the Number of Vowel Strings in Range

function vowelStrings(words, left, right) {
    let count = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = left; i <= right; i++) {
        if (vowels.has(words[i][0]) && vowels.has(words[i].at(-1))) count++;
    }
    return count;
}
