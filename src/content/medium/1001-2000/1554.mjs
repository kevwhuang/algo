// 1554 - Strings Differ by One Character

function differByOne(dict) {
    const m = dict.length, n = dict[0].length;
    if (m < n * n) {
        for (let i = 0; i < m; i++) {
            L: for (let j = i + 1; j < m; j++) {
                let flag;
                for (let k = 0; k < n; k++) {
                    if (dict[i][k] === dict[j][k]) continue;
                    if (flag) continue L;
                    flag = true;
                }
                return true;
            }
        }
    } else {
        const set = new Set();
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                const key = `${dict[i].slice(0, j)}-${dict[i].slice(j + 1)}`;
                if (set.has(key)) return true;
                set.add(key);
            }
        }
    }
    return false;
}
