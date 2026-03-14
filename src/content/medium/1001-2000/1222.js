// 1222 - Queens That Can Attack the King

function queensAttacktheKing(queens, king) {
    const board = new Array(8);
    for (let r = 0; r < 8; r++) {
        board[r] = new Array(8).fill(0);
    }
    for (let i = 0; i < queens.length; i++) {
        board[queens[i][1]][queens[i][0]] = 1;
    }
    const coords = [];
    for (let c = king[0] + 1; c < 8; c++) {
        if (board[king[1]][c]) {
            coords.push([c, king[1]]);
            break;
        }
    }
    for (let c = king[0] - 1; c >= 0; c--) {
        if (board[king[1]][c]) {
            coords.push([c, king[1]]);
            break;
        }
    }
    for (let r = king[1] + 1; r < 8; r++) {
        if (board[r][king[0]]) {
            coords.push([king[0], r]);
            break;
        }
    }
    for (let r = king[1] - 1; r >= 0; r--) {
        if (board[r][king[0]]) {
            coords.push([king[0], r]);
            break;
        }
    }
    for (let d = 1; king[1] + d < 8 && king[0] + d < 8; d++) {
        if (board[king[1] + d][king[0] + d]) {
            coords.push([king[0] + d, king[1] + d]);
            break;
        }
    }
    for (let d = 1; king[1] - d >= 0 && king[0] - d >= 0; d++) {
        if (board[king[1] - d][king[0] - d]) {
            coords.push([king[0] - d, king[1] - d]);
            break;
        }
    }
    for (let d = 1; king[1] + d < 8 && king[0] - d >= 0; d++) {
        if (board[king[1] + d][king[0] - d]) {
            coords.push([king[0] - d, king[1] + d]);
            break;
        }
    }
    for (let d = 1; king[1] - d >= 0 && king[0] + d < 8; d++) {
        if (board[king[1] - d][king[0] + d]) {
            coords.push([king[0] + d, king[1] - d]);
            break;
        }
    }
    return coords;
}
