// 2675 - Array of Objects to Matrix

function jsonToMatrix(arr) {
    function dfs(cur) {
        const res = {};
        for (const key1 in cur) {
            const e = cur[key1];
            if ((!e || typeof e !== 'object') && (res[key1] = e)) continue;
            const next = dfs(e);
            for (const key2 in next) {
                res[`${key1}.${key2}`] = next[key2];
            }
        }
        return res;
    }
    arr.forEach((e, i) => arr[i] = dfs(e));
    const set = new Set();
    for (let i = 0; i < arr.length; i++) {
        for (const key in arr[i]) {
            set.add(key);
        }
    }
    const m = arr.length, n = set.size;
    const res = Array.from({ length: m + 1 }, () => new Array(n));
    const keys = res[0] = [...set].sort();
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            res[r + 1][c] = keys[c] in arr[r] ? arr[r][keys[c]] : '';
        }
    }
    return res;
}
