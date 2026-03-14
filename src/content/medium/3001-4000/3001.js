// 3001 - Minimum Moves to Capture the Queen

function minMovesToCaptureTheQueen(a, b, c, d, e, f) {
    function check(cur) {
        let row = cur[0], col = cur[1];
        while (row && row < 9 && col && col < 9) {
            if (cur[4]) {
                if (row === a && col === b) return true;
                if (row === c && col === d) break;
            } else {
                if (row === a && col === b) break;
                if (row === c && col === d) return true;
            }
            row += cur[2], col += cur[3];
        }
    }
    const mat = [
        [e - 1, f, -1, 0, 1],
        [e + 1, f, 1, 0, 1],
        [e, f - 1, 0, -1, 1],
        [e, f + 1, 0, 1, 1],
        [e - 1, f - 1, -1, -1, 0],
        [e - 1, f + 1, -1, 1, 0],
        [e + 1, f - 1, 1, -1, 0],
        [e + 1, f + 1, 1, 1, 0],
    ];
    return mat.some(check) ? 1 : 2;
}
