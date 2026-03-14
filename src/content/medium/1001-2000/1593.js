// 1593 - Split a String Into the Max Number of Unique Substrings

function maxUniqueSplit(s) {
    function backtrack(i) {
        if (i === s.length) {
            return max = Math.max(seen.size, max);
        }
        for (let j = i + 1; j <= s.length; j++) {
            const str = s.slice(i, j);
            if (seen.has(str)) continue;
            seen.add(str);
            backtrack(j);
            seen.delete(str);
        }
    }
    let max = 1;
    const seen = new Set();
    backtrack(0);
    return max;
}
