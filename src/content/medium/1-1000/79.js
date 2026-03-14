// 79 - Word Search

function exist(board, word) {
    function backtrack(i, r, c) {
        if (i === word.length) return true;
        if (r === -1 || r === m || c === -1 || c === n) return;
        if (seen[r][c] || board[r][c] !== word[i]) return;
        seen[r][c] = 1;
        const up = backtrack(i + 1, r - 1, c);
        const down = backtrack(i + 1, r + 1, c);
        const left = backtrack(i + 1, r, c - 1);
        const right = backtrack(i + 1, r, c + 1);
        seen[r][c] = 0;
        return up || down || left || right;
    }
    const B = {}, m = board.length, n = board[0].length;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            B[board[r][c]] = (B[board[r][c]] ?? 0) + 1;
        }
    }
    for (let i = 0; i < word.length; i++) {
        if (!B[word[i]]--) return false;
    }
    const seen = Array.from({ length: m }, () => new Uint8Array(n));
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (backtrack(0, r, c)) return true;
        }
    }
    return false;
}
