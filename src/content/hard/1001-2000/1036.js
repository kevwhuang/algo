// 1036. Escape a Large Maze

function isEscapePossible(blocked, source, target) {
    function dfs(r, c) {
        if (flag || seen.size === tgt) return;
        if (r < 0 || r === n || c < 0 || c === n) return;
        if (r === rr && c === cc) return flag = true;
        const key = n * r + c;
        if (seen.has(key) || set.has(key)) return;
        seen.add(key);
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    const set = new Set(), n = 1000000;
    blocked.forEach(e => set.add(n * e[0] + e[1]));
    let seen = new Set(), rr = target[0], flag;
    const tgt = blocked.length ** 2 >> 1, cc = target[1];
    dfs(...source);
    if (flag) return true;
    if (seen.size < tgt) return false;
    seen = new Set(), rr = null;
    dfs(...target);
    return seen.size === tgt;
}
