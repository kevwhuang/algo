// 2018 - Check If Word Can Be Placed in Crossword

function placeWordInCrossword(board, word) {
    function dfs(r, c, dr, dc, i) {
        if (i === word.length) return validate(r, c);
        if (validate(r, c)) return false;
        if (M[r][c] !== ' ' && M[r][c] !== word[i]) return false;
        return dfs(r + dr, c + dc, dr, dc, i + 1);
    }
    function validate(r, c) {
        return r < 0 || r === m || c < 0 || c === n || M[r][c] === '#';
    }
    const M = board, m = M.length, n = M[0].length;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (M[r][c] === '#') continue;
            if (M[r][c] !== ' ' && M[r][c] !== word[0]) continue;
            for (const [dr, dc] of dirs) {
                if (!validate(r - dr, c - dc)) continue;
                if (dfs(r, c, dr, dc, 0)) return true;
            }
        }
    }
    return false;
}
