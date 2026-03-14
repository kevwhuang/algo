// 1165 - Single-Row Keyboard

function calculateTime(keyboard, word) {
    const dict = {};
    for (let i = 0; i < 26; i++) {
        dict[keyboard[i]] = i;
    }
    let res = dict[word[0]];
    for (let i = 1; i < word.length; i++) {
        res += Math.abs(dict[word[i]] - dict[word[i - 1]]);
    }
    return res;
}
