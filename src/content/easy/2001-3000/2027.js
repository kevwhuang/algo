// 2027 - Minimum Moves to Convert String

function minimumMoves(s) {
    let moves = 0, i = 0;
    while (i < s.length) {
        if (s[i] === 'O') i++;
        else moves++, i += 3;
    }
    return moves;
}
