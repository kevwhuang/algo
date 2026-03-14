// 3302 - Find the Lexicographically Smallest Valid Sequence

function validSequence(word1, word2) {
    if (word1.length < word2.length) return [];
    const m = word1.length, n = word2.length;
    const arr = new Int32Array(n).fill(-1);
    let i = m, j = n - 1;
    while (~--i && ~j) if (word1[i] === word2[j]) arr[j--] = i;
    const res = new Uint32Array(n);
    let flag;
    i = -1, j = 0;
    while (++i < m && j < n) {
        if (word1[i] === word2[j]) res[j++] = i;
        else if (!flag && (j === n - 1 || i < arr[j + 1])) {
            res[j++] = i, flag = true;
        }
    }
    return j === n ? res : [];
}
