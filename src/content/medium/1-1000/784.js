// 784 - Letter Case Permutation

function letterCasePermutation(s) {
    function backtrack(i) {
        if (i === len) return res.push(cur.join(''));
        if (set.has(s[i])) {
            cur[i] = s[i].toUpperCase();
            backtrack(i + 1);
        }
        cur[i] = s[i];
        backtrack(i + 1);
    }
    s = s.toLowerCase();
    const set = new Set();
    for (let code = 97; code <= 122; code++) {
        set.add(String.fromCharCode(code));
    }
    const res = [], len = s.length;
    const cur = new Array(len);
    backtrack(0);
    return res;
}
