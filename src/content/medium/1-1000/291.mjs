// 291 - Word Pattern II

function wordPatternMatch(pattern, s) {
    function backtrack(i, j) {
        if (i === pattern.length) return j === s.length;
        if (map.has(pattern[i])) {
            const str = map.get(pattern[i]);
            if (s.startsWith(str, j)) {
                return backtrack(i + 1, j + str.length);
            }
        } else {
            let str = '';
            const bound = s.length - pattern.length + i + 1;
            for (let k = j; k < bound; k++) {
                str += s[k];
                if (set.has(str)) continue;
                set.add(str);
                map.set(pattern[i], str);
                if (backtrack(i + 1, k + 1)) return true;
                map.delete(pattern[i]);
                set.delete(str);
            }
        }
        return false;
    }
    const map = new Map(), set = new Set();
    return backtrack(0, 0);
}
