// 3248 - Snake in Matrix

function finalPositionOfSnake(n, commands) {
    const dict = { UP: -n, DOWN: n, LEFT: -1, RIGHT: 1 };
    return commands.reduce((s, e) => s + dict[e], 0);
}
