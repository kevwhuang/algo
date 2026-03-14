// 1197 - Minimum Knight Moves

function minKnightMoves(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    if (x < y) [x, y] = [y, x];
    if (x === 1 && y === 0) return 3;
    if (x === 2 && y === 2) return 4;
    const m = Math.round(Math.max(x / 2, (x + y) / 3));
    return m + ((m + x + y) % 2);
}
