// 809 - Expressive Words

function expressiveWords(s, words) {
    function analyze(word) {
        const arr = [];
        for (let i = 0; i < word.length; i++) {
            const start = i;
            while (i + 1 < word.length && word[i] === word[i + 1]) i++;
            arr.push([word[i], i - start + 1]);
        }
        return arr;
    }
    s = analyze(s);
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        const word = analyze(words[i]);
        if (s.length !== word.length) continue;
        let j = 0;
        while (j < s.length) {
            if (s[j][0] !== word[j][0]) break;
            if (s[j][1] < word[j][1]) break;
            if (s[j][1] <= 2 && s[j][1] !== word[j][1]) break;
            j++;
        }
        if (j === s.length) count++;
    }
    return count;
}
