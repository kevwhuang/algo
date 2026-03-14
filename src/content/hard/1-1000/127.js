// 127 - Word Ladder

function ladderLength(beginWord, endWord, wordList) {
    const set = new Set(wordList);
    if (!set.has(endWord)) return 0;
    let res = 1, Q1 = new Set([beginWord]), Q2 = new Set([endWord]);
    const s = 'abcdefghijklmnopqrstuvwxyz';
    while (Q1.size && res++) {
        const N = new Set();
        for (const t of Q1) {
            for (let i = 0; i < t.length; i++) {
                const left = t.slice(0, i), right = t.slice(i + 1);
                for (let j = 0; j < 26; j++) {
                    const next = `${left}${s[j]}${right}`;
                    if (Q2.has(next)) return res;
                    if (!set.has(next)) continue;
                    set.delete(next);
                    N.add(next);
                }
            }
        }
        if (N.size <= Q2.size) Q1 = N;
        else Q1 = Q2, Q2 = N;
    }
    return 0;
}
