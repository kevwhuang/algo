// 2579 - Count Total Number of Colored Cells

function coloredCells(n) {
    return n-- === 1 ? 1 : 1 + (4 + 4 * n) * n / 2;
}
