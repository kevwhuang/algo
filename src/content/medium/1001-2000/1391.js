// 1391 - Check If There Is a Valid Path in a Grid

function hasValidPath(grid) {
    function hasPath() {
        const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
        let r = 0, c = 0;
        while (true) {
            if (r === m - 1 && c === n - 1) return true;
            if (grid[r][c] === 0) return false;
            grid[r][c] = 0;
            if (dir === 'U') {
                if (!validate(--r, c)) return false;
                if (grid[r][c] === 3) dir = 'L';
                else if (grid[r][c] === 4) dir = 'R';
                else if (grid[r][c] !== 2) return false;
            } else if (dir === 'D') {
                if (!validate(++r, c)) return false;
                if (grid[r][c] === 5) dir = 'L';
                else if (grid[r][c] === 6) dir = 'R';
                else if (grid[r][c] !== 2) return false;
            } else if (dir === 'L') {
                if (!validate(r, --c)) return false;
                if (grid[r][c] === 4) dir = 'D';
                else if (grid[r][c] === 6) dir = 'U';
                else if (grid[r][c] !== 1) return false;
            } else {
                if (!validate(r, ++c)) return false;
                if (grid[r][c] === 3) dir = 'D';
                else if (grid[r][c] === 5) dir = 'U';
                else if (grid[r][c] !== 1) return false;
            }
        }
    }
    const m = grid.length, n = grid[0].length, start = grid[0][0];
    let dir = start === 1 || start === 6 ? 'R' : 'D';
    if (start !== 4) return hasPath();
    const copy = Array.from({ length: m }, (_, r) => [...grid[r]]);
    if (hasPath()) return true;
    grid = copy, dir = 'R';
    return hasPath();
}
