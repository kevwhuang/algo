// 2767 - Partition String Into Minimum Beautiful Substrings

function minimumBeautifulSubstrings(s) {
    function backtrack(i, cur, acc) {
        if (i === n && 15625 % cur === 0) res = Math.min(acc, res);
        if (i === n) return;
        if (s[i] === '0' && cur === 0) return;
        backtrack(i + 1, cur << 1 | Number(s[i]), acc);
        if (15625 % cur === 0) backtrack(i, 0, acc + 1);
    }
    let res = Infinity;
    const n = s.length;
    backtrack(0, 0, 1);
    return res === Infinity ? -1 : res;
}
