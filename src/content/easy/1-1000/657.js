// 657 - Robot Return to Origin

function judgeCircle(moves) {
    let x = 0, y = 0;
    for (let i = 0; i < moves.length; i++) {
        switch (moves[i]) {
            case 'U': y++; break;
            case 'D': y--; break;
            case 'L': x--; break;
            case 'R': x++;
        }
    }
    return x === 0 && y === 0;
}
