// 425 - Word Squares

function wordSquares(words) {
    function dfs(c) {
        if (c === n) return res.push([...arr]);
        let s = '', r = 0;
        while (r < c) s += arr[r++][c];
        const next = map.get(s);
        if (!next) return;
        for (const t of next) {
            arr[c] = t;
            dfs(c + 1);
        }
    }
    const map = new Map(), n = words[0].length;
    for (let i = 0; i < words.length; i++) {
        const s = words[i];
        for (let j = 0; j < n; j++) {
            const t = s.slice(0, j + 1);
            if (!map.has(t)) map.set(t, []);
            map.get(t).push(s);
        }
    }
    const res = [], arr = new Array(n);
    for (let i = 0; i < words.length; i++) {
        arr[0] = words[i];
        dfs(1);
    }
    return res;
}
