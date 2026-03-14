// 2047 - Number of Valid Words in a Sentence

function countValidWords(sentence) {
    let words = 0;
    L: for (let r = 0; r < sentence.length; r++) {
        if (sentence[r] === ' ') continue;
        let l = r, hyphen;
        while (r < sentence.length && sentence[r] !== ' ') r++;
        if (sentence[l] === '-' || sentence[r - 1] === '-') continue;
        while (l < r) {
            const char = sentence[l++];
            if ('a' <= char && char <= 'z') continue;
            if ('0' <= char && char <= '9') continue L;
            if (char !== '-' && l < r) continue L;
            if (char !== '-') continue;
            if (hyphen) continue L;
            if (sentence[l - 2] < 'a' || 'z' < sentence[l - 2]) continue L;
            if (sentence[l] < 'a' || 'z' < sentence[l]) continue L;
            hyphen = true;
        }
        words++;
    }
    return words;
}
