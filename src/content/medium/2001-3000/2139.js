// 2139 - Minimum Moves to Reach Target Score

function minMoves(target, maxDoubles) {
    let moves = 0;
    while (target > 1) {
        if (target % 2) {
            moves++;
            target--;
        } else {
            if (maxDoubles === 0) break;
            maxDoubles--;
            moves++;
            target /= 2;
        }
    }
    return moves + target - 1;
}
