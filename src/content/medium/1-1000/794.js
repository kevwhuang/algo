// 794 - Valid Tic Tac Toe State

function validTicTacToe(board) {
    function checkWin($) {
        if (M[0][0] === $ && M[0][1] === $ && M[0][2] === $) return true;
        if (M[1][0] === $ && M[1][1] === $ && M[1][2] === $) return true;
        if (M[2][0] === $ && M[2][1] === $ && M[2][2] === $) return true;
        if (M[0][0] === $ && M[1][0] === $ && M[2][0] === $) return true;
        if (M[0][1] === $ && M[1][1] === $ && M[2][1] === $) return true;
        if (M[0][2] === $ && M[1][2] === $ && M[2][2] === $) return true;
        if (M[0][0] === $ && M[1][1] === $ && M[2][2] === $) return true;
        if (M[0][2] === $ && M[1][1] === $ && M[2][0] === $) return true;
        return false;
    }
    let acc1 = 0, acc2 = 0;
    const M = board;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (M[i][j] === 'X') acc1++;
            else if (M[i][j] === 'O') acc2++;
        }
    }
    const a = checkWin('X'), b = checkWin('O');
    if (!a && !b && acc1 !== acc2 && acc1 - 1 !== acc2) return false;
    if (a && b) return false;
    if (a && acc1 - 1 !== acc2) return false;
    if (b && acc1 !== acc2) return false;
    return true;
}
