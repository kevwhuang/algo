// 555 - Split Concatenated Strings

function splitLoopedString(strs) {
    function check(str, idx) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== max) continue;
            let cur = str.slice(i);
            for (let j = idx + 1; j < strs.length; j++) {
                cur += strs[j];
            }
            for (let j = 0; j < idx; j++) {
                cur += strs[j];
            }
            cur += str.slice(0, i);
            if (cur > res) res = cur;
        }
    }
    let max = 'a', indices = new Set();
    for (let i = 0; i < strs.length; i++) {
        let rvs = '';
        for (let j = strs[i].length - 1; ~j; j--) {
            const char = strs[i][j];
            if (char > max) max = char, indices = new Set([i]);
            else if (char === max) indices.add(i);
            rvs += char;
        }
        if (rvs > strs[i]) strs[i] = rvs;
    }
    let res = '';
    for (const idx of indices) {
        let rvs = '';
        for (let i = strs[idx].length - 1; ~i; i--) {
            rvs += strs[idx][i];
        }
        check(rvs, idx);
        check(strs[idx], idx);
    }
    return res;
}
