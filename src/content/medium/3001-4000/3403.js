// 3403 - Find the Lexicographically Largest String From the Box I

function answerString(word, numFriends) {
    if (numFriends === 1) return word;
    let max = 'a';
    const n = word.length;
    for (let i = 0; i < n; i++) {
        if (word[i] > max) max = word[i];
    }
    let res = '';
    const d = n - numFriends + 1;
    for (let i = 0; i < n; i++) {
        if (word[i] !== max) continue;
        const s = word.slice(i, i + d);
        if (s > res) res = s;
    }
    return res;
}
