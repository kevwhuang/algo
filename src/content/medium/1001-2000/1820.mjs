// 1820 - Maximum Number of Accepted Invitations

function maximumInvitations(grid) {
    function dfs(r) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 0 || seen[c]) continue;
            if (matches[c] === undefined) return matches[c] = r + 1;
            seen[c] = 1;
            if (dfs(matches[c] - 1)) return matches[c] = r + 1;
        }
    }
    let invites = 0, seen;
    const m = grid.length, n = grid[0].length;
    const matches = new Array(m);
    for (let r = 0; r < m; r++) {
        seen = new Uint8Array(n);
        if (dfs(r)) invites++;
    }
    return invites;
}
