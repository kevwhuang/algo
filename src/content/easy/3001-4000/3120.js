// 3120 - Count the Number of Special Characters I

function numberOfSpecialChars(word) {
    const set = new Set();
    for (let i = 0; i < word.length; i++) {
        set.add(word.charCodeAt(i));
    }
    let letters = 0;
    for (const code of set) {
        if (code < 97) continue;
        if (set.has(code - 32)) letters++;
    }
    return letters;
}
