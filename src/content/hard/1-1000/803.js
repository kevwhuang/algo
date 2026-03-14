// 803 - Bricks Falling When Hit

function hitBricks(grid, hits) {
    function dfs(r, c) {
        if (M[r][c] !== 1) return 0;
        M[r][c] = 2;
        let acc = 1;
        if (r) acc += dfs(r - 1, c);
        if (r + 1 < m) acc += dfs(r + 1, c);
        if (c) acc += dfs(r, c - 1);
        if (c + 1 < n) acc += dfs(r, c + 1);
        return acc;
    }
    const M = grid, m = M.length, n = M[0].length;
    hits.forEach(e => M[e[0]][e[1]]--);
    M[0].forEach((_, c) => dfs(0, c));
    for (let i = hits.length - 1; ~i; i--) {
        const r = hits[i][0], c = hits[i][1];
        hits[i] = 0;
        if (M[r][c] < 0) continue;
        M[r][c] = 1;
        let flag = r === 0;
        flag ||= r && M[r - 1][c] > 1;
        flag ||= r + 1 < m && M[r + 1][c] > 1;
        flag ||= c && M[r][c - 1] > 1;
        flag ||= c + 1 < n && M[r][c + 1] > 1;
        if (flag) hits[i] = dfs(r, c) - 1;
    }
    return hits;
}
