// 3189 - Minimum Moves to Get a Peaceful Board

function minMoves(rooks) {
    let moves = 0;
    rooks.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < rooks.length; i++) {
        moves += Math.abs(i - rooks[i][0]);
        rooks[i][0] = i;
    }
    rooks.sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < rooks.length; i++) {
        moves += Math.abs(i - rooks[i][1]);
    }
    return moves;
}
