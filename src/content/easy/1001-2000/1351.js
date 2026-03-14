// 1351 - Count Negative Numbers in a Sorted Matrix

function countNegatives(grid) {
    let count = 0, r = grid.length - 1, c = 0;
    const n = grid[0].length;
    while (r >= 0 && c < n) {
        if (grid[r][c] >= 0) c++;
        else {
            count += n - c;
            r--;
        }
    }
    return count;
}
