// 756 - Pyramid Transition Matrix

function pyramidTransition(bottom, allowed) {
    function dfs(row, level) {
        if (memo.has(row)) return false;
        if (level === 1) return true;
        let set = new Set(['']);
        for (let i = 0; i < level - 1; i++) {
            const base = row.slice(i, i + 2);
            if (!patterns.has(base)) return !memo.add(row);
            const nextSet = new Set();
            for (const cur of set) {
                for (const top of patterns.get(base)) {
                    nextSet.add(cur + top);
                }
            }
            set = nextSet;
        }
        for (const next of set) {
            if (dfs(next, level - 1)) return true;
        }
        return !memo.add(row);
    }
    const patterns = new Map();
    for (let i = 0; i < allowed.length; i++) {
        const base = allowed[i].slice(0, 2);
        if (!patterns.has(base)) patterns.set(base, []);
        patterns.get(base).push(allowed[i][2]);
    }
    const memo = new Set();
    return dfs(bottom, bottom.length);
}
