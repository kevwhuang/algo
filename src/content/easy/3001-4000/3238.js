// 3238 - Find the Number of Winning Players

function winningPlayerCount(n, pick) {
    const M = Array.from({ length: n }, () => new Uint8Array(11));
    pick.forEach(e => M[e[0]][e[1]]++);
    return M.reduce((s, e, i) => s + e.some(e => e > i), 0);
}
