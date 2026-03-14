// 957 - Prison Cells After N Days

function prisonAfterNDays(cells, n) {
    n = n % 14 || 14;
    while (n--) {
        const next = new Array(8).fill(0);
        for (let i = 1; i <= 6; i++) {
            if (cells[i - 1] === cells[i + 1]) next[i] = 1;
        }
        cells = next;
    }
    return cells;
}
