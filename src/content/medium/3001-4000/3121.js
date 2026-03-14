// 3121 - Count the Number of Special Characters II

function numberOfSpecialChars(word) {
    const lower = new Array(26).fill(-1);
    const upper = new Array(26).fill(-1);
    for (let i = 0; i < word.length; i++) {
        if (word[i] >= 'a') {
            lower[word.charCodeAt(i) - 97] = i;
        } else {
            const code = word.charCodeAt(i) - 65;
            if (upper[code] === -1) upper[code] = i;
        }
    }
    let letters = 0;
    for (let i = 0; i < 26; i++) {
        if (lower[i] === -1 || upper[i] === -1) continue;
        if (lower[i] < upper[i]) letters++;
    }
    return letters;
}
