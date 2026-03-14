// 2575 - Find the Divisibility Array of a String

function divisibilityArray(word, m) {
    const res = new Uint8Array(word.length);
    for (let i = 0, cur = 0; i < word.length; i++) {
        cur = (10 * cur + Number(word[i])) % m;
        if (cur === 0) res[i] = 1;
    }
    return res;
}
