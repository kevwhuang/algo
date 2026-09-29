// 4061. Minimum Queen Moves to Reach Target

function minQueenMoves(source, target) {
    const abs = Math.abs, [x1, y1] = source, [x2, y2] = target;
    if (x1 === x2 && y1 === y2) return 0;
    return x1 === x2 || y1 === y2 || abs(x1 - x2) === abs(y1 - y2) ? 1 : 2;
}
