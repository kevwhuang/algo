// 2000 - Reverse Prefix of Word

function reversePrefix(word, ch) {
    const idx = word.indexOf(ch);
    if (idx === -1) return word;
    let rvs = '';
    for (let i = idx; ~i; i--) {
        rvs += word[i];
    }
    for (let i = idx + 1; i < word.length; i++) {
        rvs += word[i];
    }
    return rvs;
}
