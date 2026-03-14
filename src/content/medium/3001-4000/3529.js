// 3529 - Count Cells in Overlapping Horizontal and Vertical Substrings

function countCells(grid, pattern) {
    function find(fn1, fn2, seen, flag) {
        r = 0, c = 0, i = 0;
        while (r < m && c < n) {
            const a = grid[r][c], b = pattern[i];
            if (a !== b) i ? i = lps[i - 1] : fn1();
            if (a !== b) continue;
            fn1();
            if (++i < nn) continue;
            rr = r, cc = c, i = lps[i - 1], j = 0;
            fn2();
            do {
                if (flag && seen1[rr][cc]) res++;
                seen[rr][cc] = 1, j++;
                fn2();
            } while (j < nn && seen[rr][cc] < 1);
        }
    }
    const fn1 = () => ++r === m && ++c && (r = 0);
    const fn2 = () => --rr < 0 && cc-- && (rr = m - 1);
    const fn3 = () => ++c === n && ++r && (c = 0);
    const fn4 = () => --cc < 0 && rr-- && (cc = n - 1);
    const m = grid.length, n = grid[0].length, nn = pattern.length;
    const seen1 = Array.from({ length: m }, () => new Uint8Array(n));
    const seen2 = Array.from({ length: m }, () => new Uint8Array(n));
    const lps = new Uint16Array(nn);
    let res = 0, l = 0, r = 1, c, rr, cc, i, j;
    while (r < nn) {
        if (pattern[l] === pattern[r]) lps[r++] = ++l;
        else l ? l = lps[l - 1] : r++;
    }
    find(fn1, fn2, seen1);
    find(fn3, fn4, seen2, true);
    return res;
}
