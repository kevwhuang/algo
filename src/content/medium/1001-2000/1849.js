// 1849 - Splitting a String Into Descending Consecutive Values

function splitString(s) {
    function backtrack(i, tgt) {
        if (i === s.length) return true;
        if (tgt === 0) return Number(s.slice(i)) === 0;
        for (let j = i + 1; j <= s.length; j++) {
            const next = Number(s.slice(i, j));
            if (next !== tgt) continue;
            return backtrack(j, next - 1);
        }
    }
    for (let i = 1; i < s.length; i++) {
        const n1 = Number(s.slice(0, i));
        for (let j = i + 1; j <= s.length; j++) {
            const n2 = Number(s.slice(i, j));
            if (n1 - n2 !== 1) continue;
            if (backtrack(j, n2 - 1)) return true;
        }
    }
    return false;
}
