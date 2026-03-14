// 3078 - Match Alphanumerical Pattern in Matrix I

function findPattern(board, pattern) {
    const nums = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    const m1 = board.length, n1 = board[0].length;
    const m2 = pattern.length, n2 = pattern[0].length;
    const bound1 = m1 - m2 + 1, bound2 = n1 - n2 + 1;
    for (let r = 0; r < bound1; r++) {
        L: for (let c = 0; c < bound2; c++) {
            const map = new Map();
            for (let rr = 0; rr < m2; rr++) {
                for (let cc = 0; cc < n2; cc++) {
                    const cell1 = pattern[rr][cc];
                    const cell2 = board[r + rr][c + cc].toString();
                    if (nums.has(cell1)) {
                        if (cell1 !== cell2) continue L;
                    } else if (map.has(cell1) || map.has(cell2)) {
                        if (map.get(cell1) !== cell2) continue L;
                        if (map.get(cell2) !== cell1) continue L;
                    } else {
                        map.set(cell1, cell2);
                        map.set(cell2, cell1);
                    }
                }
            }
            return [r, c];
        }
    }
    return [-1, -1];
}
