// 390 - Elimination Game

function lastRemaining(n) {
    let head = 1, inc = 1, dir = true;
    while (n > 1) {
        if (dir || n % 2) head += inc;
        n >>= 1;
        inc <<= 1;
        dir = !dir;
    }
    return head;
}
