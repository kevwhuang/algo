// 524 - Longest Word in Dictionary Through Deleting

function findLongestWord(s, dictionary) {
    let res = '';
    for (let i = 0; i < dictionary.length; i++) {
        const word = dictionary[i];
        if (word.length > s.length) continue;
        if (word.length < res.length) continue;
        if (word.length === res.length && word > res) continue;
        let j = 0, k = 0;
        while (j < word.length && k < s.length) {
            const index = s.indexOf(word[j], k);
            if (index === -1) break;
            j++;
            k = index + 1;
        }
        if (j == word.length) res = word;
    }
    return res;
}
