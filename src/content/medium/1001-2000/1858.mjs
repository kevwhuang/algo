// 1858 - Longest Word With All Prefixes

function longestWord(words) {
    words.sort((a, b) => b.length - a.length || (a < b ? -1 : 1));
    const set = new Set(words);
    L: for (let i = 0; i < words.length; i++) {
        const word = words[i];
        for (let j = 1; j < word.length; j++) {
            if (!set.has(word.slice(0, j))) continue L;
        }
        return word;
    }
    return '';
}
