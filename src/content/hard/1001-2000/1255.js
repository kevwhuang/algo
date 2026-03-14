// 1255 - Maximum Score Words Formed by Letters

function maxScoreWords(words, letters, score) {
    function backtrack(i, acc) {
        if (i === n) return res = Math.max(acc, res);
        backtrack(i + 1, acc);
        if (M[i].some((e, j) => e > B[j])) return;
        M[i].forEach((e, j) => B[j] -= e);
        backtrack(i + 1, acc + arr[i]);
        M[i].forEach((e, j) => B[j] += e);
    }
    const n = words.length;
    const M = Array.from({ length: n }, () => new Uint8Array(26));
    const arr = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
        const s = words[i];
        for (let j = 0; j < s.length; j++) {
            const key = s.charCodeAt(j) - 97;
            M[i][key]++, arr[i] += score[key];
        }
    }
    const B = new Array(26).fill(0);
    letters.forEach(e => B[e.charCodeAt() - 97]++);
    let res = 0;
    backtrack(0, 0);
    return res;
}
