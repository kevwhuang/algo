// 1275 - Find Winner on a Tic Tac Toe Game

function tictactoe(moves) {
    if (moves.length < 5) return 'Pending';
    const arr = new Int8Array(9);
    for (let i = 0; i < moves.length; i += 2) {
        arr[3 * moves[i][0] + moves[i][1]] = 1;
    }
    for (let i = 1; i < moves.length; i += 2) {
        arr[3 * moves[i][0] + moves[i][1]] = -1;
    }
    const D = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ];
    for (let i = 0; i < 8; i++) {
        const sum = arr[D[i][0]] + arr[D[i][1]] + arr[D[i][2]];
        if (sum === 3) return 'A';
        if (sum === -3) return 'B';
    }
    return moves.length === 9 ? 'Draw' : 'Pending';
}
