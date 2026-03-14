// 126 - Word Ladder II

function findLadders(beginWord, endWord, wordList) {
    wordList.push(beginWord);
    const map = new Map(), adj = new Map(), n = endWord.length;
    const seen = new Map([[beginWord, -1]]);
    for (let i = 0; i < wordList.length; i++) {
        const s = wordList[i];
        map.set(s, []);
        for (let j = 0; j < n; j++) {
            const t = `${s.slice(0, j)}*${s.slice(j + 1)}`;
            if (!adj.has(t)) adj.set(t, []);
            adj.get(t).push(s);
        }
    }
    if (!map.has(endWord)) return [];
    let acc = 0, Q = new Set([beginWord]);
    while (Q.size) {
        const N = new Set();
        for (const s of Q) {
            for (let i = 0; i < n; i++) {
                const arr = adj.get(`${s.slice(0, i)}*${s.slice(i + 1)}`);
                for (const t of arr) {
                    if (seen.get(t) < acc) continue;
                    map.get(t).push(s);
                    seen.set(t, acc);
                    N.add(t);
                }
            }
        }
        acc++, Q = N;
    }
    if (!seen.has(endWord)) return [];
    const res = new Array(map.get(endWord).length).fill([endWord], 0, 1);
    let i = 1;
    while (res[0].at(-1) !== beginWord) {
        for (let j = 0; j < i; j++) {
            const arr = map.get(res[j].at(-1));
            for (let k = 1; k < arr.length; k++) {
                res[i++] = [...res[j], arr[k]];
            }
            if (arr.length) res[j].push(arr[0]);
        }
    }
    res.forEach(e => e.reverse());
    return res;
}
