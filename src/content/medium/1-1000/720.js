// 720 - Longest Word in Dictionary

function longestWord(words) {
    words.sort();
    let res = '';
    const set = new Set();
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length === 1 || set.has(word.slice(0, -1))) {
            if (word.length > res.length) res = word;
            set.add(word);
        }
    }
    return res;
}
