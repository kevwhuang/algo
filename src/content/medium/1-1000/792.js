// 792 - Number of Matching Subsequences

function numMatchingSubseq(s, words) {
    const map = new Map();
    for (let i = 0; i < words.length; i++) {
        map.set(words[i], map.get(words[i]) + 1 || 1);
    }
    let count = 0;
    L: for (const word of map.keys()) {
        if (word.length > s.length) continue;
        let next = -1;
        for (let i = 0; i < word.length; i++) {
            next = s.indexOf(word[i], next + 1);
            if (next === -1) continue L;
        }
        count += map.get(word);
    }
    return count;
}
