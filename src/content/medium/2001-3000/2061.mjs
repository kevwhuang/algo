// 2061 - Number of Spaces Cleaning Robot Cleaned

function numberOfCleanRooms(room) {
    function turn() {
        switch (dir) {
            case 'U': dr = 0, dc = 1, dir = 'R'; break;
            case 'D': dr = 0, dc = -1, dir = 'L'; break;
            case 'L': dr = -1, dc = 0, dir = 'U'; break;
            default: dr = 1, dc = 0, dir = 'D';
        }
    }
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    const m = room.length, n = room[0].length;
    const record = {
        U: Array.from({ length: m }, () => new Array(n)),
        D: Array.from({ length: m }, () => new Array(n)),
        L: Array.from({ length: m }, () => new Array(n)),
        R: Array.from({ length: m }, () => new Array(n)),
    };
    record.R[0][0] = 1;
    const clean = new Set(['0-0']);
    let r = 0, c = 0, dr = 0, dc = 1, dir = 'R';
    while (true) {
        if (!validate(r + dr, c + dc)) turn();
        else if (room[r + dr][c + dc]) turn();
        else clean.add(`${r += dr}-${c += dc}`);
        if (record[dir][r][c]) return clean.size;
        record[dir][r][c] = 1;
    }
}
