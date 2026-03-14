// 3858 - Minimum Bitwise OR From Grid

function minimumOR(grid) {
    let res = 0;
    const m = grid.length, n = grid[0].length;
    for (let flag, mask = 0, bit = 1 << 16; bit; bit >>= 1) {
        flag = false, mask |= bit;
        for (let x = 0; x < m; x++) {
            let y = 0;
            while (y < n && grid[x][y] & mask) y++;
            if (y === n && (flag = true)) break;
        }
        if (flag) res |= bit, mask ^= bit;
    }
    return res;
}
