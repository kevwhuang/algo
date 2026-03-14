// 140 - Word Break II

function wordBreak(s, wordDict) {
    function backtrack(i, t) {
        if (i === n && set.has(t)) {
            cur.push(t);
            res.push(cur.join` `);
            cur.pop();
        }
        if (i === n) return;
        backtrack(i + 1, t + s[i]);
        if (!set.has(t)) return;
        cur.push(t);
        backtrack(i + 1, s[i]);
        cur.pop();
    }
    const res = [], cur = [], n = s.length;
    const set = new Set(wordDict);
    backtrack(1, s[0]);
    return res;
}
