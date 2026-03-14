// 1033 - Moving Stones Until Consecutive

function numMovesStones(a, b, c) {
    [a, b, c] = [a, b, c].sort((a, b) => a - b);
    let min = 2;
    if (c - a === 2) min = 0;
    else if (b - a <= 2 || c - b <= 2) min = 1;
    return [min, c - a - 2];
}
