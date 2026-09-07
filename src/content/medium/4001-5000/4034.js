// 4034. Minimum Bishop Moves to Reach Target

function minBishopMoves(source, target) {
    const [x1, y1] = source, [x2, y2] = target;
    if ((x1 + x2 + y1 + y2) % 2) return -1;
    return Math.abs(x1 - x2) === Math.abs(y1 - y2) ? 1 : 2;
}
